function highlight(obj){
    var orig = obj.style.background;
    obj.style.background = 'red';
    setTimeout(function(){
         obj.style.background = orig;
    }, 100); 
 }

 function playing_notes()
 {
     $("#C5").click(function(){
         //highlight(this)
         var audio = new Audio();
         audio.src="/static/wav/" + this.id + ".wav"
         audio.playbackRate = 0.8
         audio.volume=1.0
         audio.play();
     })
 
     $("#Db5").click(function(){
         //highlight(this)
         var audio = new Audio();
         audio.src="/static/wav/" + this.id + ".wav"
         audio.playbackRate = 0.8
         audio.volume=1.0
         audio.play();
     })
 
     $("#D5").click(function(){
         //highlight(this)
         var audio = new Audio();
         audio.src="/static/wav/" + this.id + ".wav"
         audio.playbackRate = 0.8
         audio.volume=1.0
         audio.play();
     })
 
     $("#Eb5").click(function(){
         //highlight(this)
         var audio = new Audio();
         audio.src="/static/wav/" + this.id + ".wav"
         audio.playbackRate = 0.8
         audio.volume=1.0
         audio.play();
     })
 
     $("#E5").click(function(){
         //highlight(this)
         var audio = new Audio();
         audio.src="/static/wav/" + this.id + ".wav"
         audio.playbackRate = 0.8
         audio.volume=1.0
         audio.play();
     })
 
     $("#F5").click(function(){
         //highlight(this)
         var audio = new Audio();
         audio.src="/static/wav/" + this.id + ".wav"
         audio.playbackRate = 0.8
         audio.volume=1.0
         audio.play();
     })
 
     $("#Gb5").click(function(){
         //highlight(this)
         var audio = new Audio();
         audio.src="/static/wav/" + this.id + ".wav"
         audio.playbackRate = 0.8
         audio.volume=1.0
         audio.play();
     })
 
     $("#G5").click(function(){
         //highlight(this)
         var audio = new Audio();
         audio.src="/static/wav/" + this.id + ".wav"
         audio.playbackRate = 0.8
         audio.volume=1.0
         audio.play();
     })
 
     $("#Ab5").click(function(){
         //highlight(this)
         var audio = new Audio();
         audio.src="/static/wav/" + this.id + ".wav"
         audio.playbackRate = 0.8
         audio.volume=1.0
         audio.play();
     })
 
     $("#A5").click(function(){
         //highlight(this)
         var audio = new Audio();
         audio.src="/static/wav/" + this.id + ".wav"
         audio.playbackRate = 0.8
         audio.volume=1.0
         audio.play();
     })
 
     $("#Bb5").click(function(){
         //highlight(this)
         var audio = new Audio();
         audio.src="/static/wav/" + this.id + ".wav"
         audio.playbackRate = 0.8
         audio.volume=1.0
         audio.play();
     })
 
     $("#B5").click(function(){
         //highlight(this)
         var audio = new Audio();
         audio.src="/static/wav/" + this.id + ".wav"
         audio.playbackRate = 0.8
         audio.volume=1.0
         audio.play();
     })
 
     $("#C6").click(function(){
         //highlight(this)
         var audio = new Audio();
         audio.src="/static/wav/" + this.id + ".wav"
         audio.playbackRate = 0.8
         audio.volume=1.0
         audio.play();
     })
 
     $("#Db6").click(function(){
         //highlight(this)
         var audio = new Audio();
         audio.src="/static/wav/" + this.id + ".wav"
         audio.playbackRate = 0.8
         audio.volume=1.0
         audio.play();
     })
 
     $("#D6").click(function(){
         //highlight(this)
         var audio = new Audio();
         audio.src="/static/wav/" + this.id + ".wav"
         audio.playbackRate = 0.8
         audio.volume=1.0
         audio.play();
     })
 
     $("#Eb6").click(function(){
         //highlight(this)
         var audio = new Audio();
         audio.src="/static/wav/" + this.id + ".wav"
         audio.playbackRate = 0.8
         audio.volume=1.0
         audio.play();
     })
 
     document.addEventListener('keydown', function(event) {
     if(event.keyCode == 65) {
         document.getElementById("C5").click();
     }
     if(event.keyCode == 83) {
         document.getElementById("D5").click();
     }
     if(event.keyCode == 68) {
         document.getElementById("E5").click();
     }
     if(event.keyCode == 70) {
         document.getElementById("F5").click();
     }
     if(event.keyCode == 71) {
         document.getElementById("G5").click();
     }
     if(event.keyCode == 72) {
         document.getElementById("A5").click();
     }
     if(event.keyCode == 74) {
         document.getElementById("B5").click();
     }
     if(event.keyCode == 75) {
         document.getElementById("C6").click();
     }
     if(event.keyCode == 76) {
         document.getElementById("D6").click();
     }
     if(event.keyCode == 87) {
         document.getElementById("Db5").click();
     }
     if(event.keyCode == 69) {
         document.getElementById("Eb5").click();
     }
     if(event.keyCode == 84) {
         document.getElementById("Gb5").click();
     }
     if(event.keyCode == 89) {
         document.getElementById("Ab5").click();
     }
     if(event.keyCode == 85) {
         document.getElementById("Bb5").click();
     }
     if(event.keyCode == 79) {
         document.getElementById("Db6").click();
     }
     if(event.keyCode == 80) {
         document.getElementById("Eb6").click();
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
    document.getElementById("comment").style.visibility= "hidden";

    let clicked = []
    console.log("clicked: " + clicked)
    count = 3
    playing_notes()
    $(".key").click(function(){
        //$('#comment').removeClass('greenText');
        $('#comment').removeClass('redText');
        item = question["answer"]
        if (item.includes(this.id) && (clicked.includes(this.id) == false)){
            this.className = "green";
            count -= 1
            $//("#comment").empty()
            if (count == 0 ) {
                score += 1
                save_score(score)
                enableBut();
                //$("#comment").empty()
                $('#comment').addClass('greenText');

                //$("#comment").append("<div class = greenText>That is correct! Proceed to Next Screen<div>")
                document.getElementById("comment").style.visibility= "visible";
                $('#comment').addClass('greenText');
                $("#comment").text("That is correct! Proceed to Next Screen")
                $("#score").empty()
                $("#score").append("<div>Score: "+score+"</div>")
            }
            if (count == 1) {
                score += 1
                save_score(score)
                //$("#comment").empty()

                //$("#comment").append("<div class = greenText>That is correct! Now input the last note<div>")
                document.getElementById("comment").style.visibility= "visible";
                $('#comment').addClass('greenText');
                $("#comment").text("That is correct! Now input the last note")
                $("#score").empty()
                $("#score").append("<div>Score: "+score+"</div>")
            }
            if (count == 2) {
                score += 1
                save_score(score)
                //$("#comment").empty()

                //$("#comment").append("<div class = greenText>That is correct! Now input the last two notes<div>")
                document.getElementById("comment").style.visibility= "visible";
                $('#comment').addClass('greenText');
                $("#comment").text("That is correct! Now input the last two notes")
                $("#score").empty()
                $("#score").append("<div>Score: "+score+"</div>")
            }

            clicked.push(this.id)
          
        }
        else if(clicked.includes(this.id) == false && count > 0){
            //$("#comment").empty()
            this.style.background = 'red'

            if (score > 0) {
                score -= 1
            } else {
                score = 0
            }
            save_score(score)
            $("#score").empty()
            $("#score").append("<div>Score: "+score+"</div>")
            //highlight(this)
            //$("#comment").append("<div class = redText>That is incorrect. Try Again!<div>")
            document.getElementById("comment").style.visibility= "visible";
            $('#comment').addClass('redText');
            $("#comment").text("That is incorrect. Try Again!")
            clicked.push(this.id)


        }
        console.log("clicked: " + clicked)
        
    });
    $('#popper1').hover(function() {
            $('#hint').toggle();
    });
    $('#popper').hover(function() {
        $('#pop').toggle();
    });
});

