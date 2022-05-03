function highlight(obj){
    var orig = obj.style.background;
    obj.style.background = 'red';
    setTimeout(function(){
         obj.style.background = orig;
    }, 300);
 }



function playing_notes()
{
    $("#A").click(function(){
        var audio = new Audio();
        audio.src="/static/A5.mp3"
        audio.playbackRate = 0.8
        audio.volume=1.0
        audio.play();
    })
    $("#C").click(function(){
        var audio = new Audio();
        audio.src="/static/C.wav"
        audio.play();
    })

    $("#Cs").click(function(){
        var audio = new Audio();
        audio.src="/static/c_sharp.wav"
        audio.play();
        
    })

    $("#D").click(function(){
        var audio = new Audio();
        audio.src="/static/D.wav"
        audio.play();
    })

    $("#E").click(function(){
        var audio = new Audio();
        audio.src="/static/E.wav"
        audio.play();
    })

    $("#F").click(function(){
        var audio = new Audio();
        audio.src="/static/F.wav"
        audio.play();
    })

    $("#Fs").click(function(){
        var audio = new Audio();
        audio.src="/static/f_sharp.wav"
        audio.play();
    })
    $("#G").click(function(){
        var audio = new Audio();
        audio.src="/static/g.wav"
        audio.play();
    })
    $("#B").click(function(){
        var audio = new Audio();
        audio.src="/static/B5.mp3"
        audio.playbackRate = 0.8
        audio.volume=1.0
        audio.play();
    })

    $("#highC").click(function(){
        var audio = new Audio();
        audio.src="/static/C6.mp3"
        audio.playbackRate = 0.8
        audio.volume=1.0
        audio.play();
    })

    $("#As").click(function(){
        var audio = new Audio();
        audio.src="/static/a_sharp.mp3"
        audio.playbackRate = 0.8
        audio.volume=1.0
        audio.play();
    })

    $("#Gs").click(function(){
        var audio = new Audio();
        audio.src="/static/g_sharp.mp3"
        audio.playbackRate = 0.8
        audio.volume=1.0
        audio.play();
    })

    $("#Ds").click(function(){
        var audio = new Audio();
        audio.src="/static/d_sharp.wav"
        audio.play();
    })
    document.addEventListener('keydown', function(event) {
    if(event.keyCode == 65) {
        document.getElementById("C").click();
    }
    if(event.keyCode == 83) {
        document.getElementById("D").click();
    }
    if(event.keyCode == 68) {
        document.getElementById("E").click();
    }
    if(event.keyCode == 70) {
        document.getElementById("F").click();
    }
    if(event.keyCode == 71) {
        document.getElementById("G").click();
    }
    if(event.keyCode == 72) {
        document.getElementById("A").click();
    }
    if(event.keyCode == 74) {
        document.getElementById("B").click();
    }
    if(event.keyCode == 75) {
        document.getElementById("highC").click();
    }
    if(event.keyCode == 87) {
        document.getElementById("Cs").click();
    }
    if(event.keyCode == 69) {
        document.getElementById("Ds").click();
    }
    if(event.keyCode == 84) {
        document.getElementById("Fs").click();
    }
    if(event.keyCode == 89) {
        document.getElementById("Gs").click();
    }
    if(event.keyCode == 85) {
        document.getElementById("As").click();
    }
    });
}

function save_score(score){
    data_to_save = score
    $.ajax({
        type: "POST",
        url: "/save_score",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data_to_save),
        success: function(result){
            score = result["score"] 
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    })
}

function disableBut() {
    document.getElementById("next_button").style.visibility= "hidden";
}

function enableBut() {
    document.getElementById("next_button").style.visibility= "visible";
}


$(document).ready(function () {
    disableBut()
    
    $("#quiztitle").append("<h1>"+question["chord"]+"</h1>")
    $("#quiztext").append("<p>"+question["text"]+"</p>")
    $("#score").empty()
    $("#score").append("<div>Score: "+score+"</div>")
    
    console.log("hello")
    let clicked = []
    console.log("clicked: " + clicked)
    count = 3
    playing_notes()
    $(".key").click(function(){
        $("#comment").empty()
        console.log(this.id)
        item = question["answer"]
        if (item.includes(this.id) && (clicked.includes(this.id) == false)){
            this.className = "green";
            count -= 1
            $("#comment").empty()
            if (count == 0) {
                score += 1
                save_score(score)
                enableBut();
                $("#comment").empty()

                $("#comment").append("<div class = greenText>That is correct! Proceed to Next Screen<div>")
                $("#score").empty()
                $("#score").append("<div>Score: "+score+"</div>")
            }
            if (count == 1) {
                score += 1
                save_score(score)
                $("#comment").empty()

                $("#comment").append("<div class = greenText>That is correct! Now input the last note<div>")
                $("#score").empty()
                $("#score").append("<div>Score: "+score+"</div>")
            }
            if (count == 2) {
                score += 1
                save_score(score)
                $("#comment").empty()

                $("#comment").append("<div class = greenText>That is correct! Now input the last two notes<div>")
                $("#score").empty()
                $("#score").append("<div>Score: "+score+"</div>")
            }
            console.log("clicked")
            clicked.push(this.id)
          
        }
        else if(clicked.includes(this.id) == false && count > 0){
            $("#comment").empty()

            score -= 1
            save_score(score)
            $("#score").empty()
            $("#score").append("<div>Score: "+score+"</div>")
            console.log(score)
            highlight(this)
            $("#comment").append("<div class = redText>That is incorrect. Try Again!<div>")


        }
        
    });
    $('#popper1').hover(function() {
            $('#hint').toggle();
    });
    $('#popper').hover(function() {
        $('#pop').toggle();
    });
});

