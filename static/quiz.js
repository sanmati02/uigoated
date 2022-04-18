function playing_notes()
{
    $("#A").click(function(){
        var audio = new Audio();
        audio.src="/static/A.wav"
        audio.play();
    })
    $("#C").click(function(){
        var audio = new Audio();
        audio.src="/static/C.wav"
        audio.play();
    })

    $("#Cs").click(function(){
        var audio = new Audio();
        audio.src="/static/C#.wav"
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
        audio.src="/static/f#.wav"
        audio.play();
    })
    $("#G").click(function(){
        var audio = new Audio();
        audio.src="/static/g.wav"
        audio.play();
    })
    $("#B").click(function(){
        var audio = new Audio();
        audio.src="/static/B.wav"
        audio.play();
    })
    
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
    document.getElementById("next_button").disabled = true;
}

function enableBut() {
    document.getElementById("next_button").disabled = false;
}

$(document).ready(function () {
    disableBut()
    $("#quiztitle").append("<h1>"+question["chord"]+"</h1>")
    $("#quiztext").append("<p>"+question["text"]+"</p>")
    count = 3
    playing_notes()
    $(".key").click(function(){
        $("#correct").empty()
        $("#incorrect").empty()
        
        console.log(this.id)
        item = question["answer"]
        if (item.includes(this.id)){
            this.className = "green";
            count -= 1
            score += 1
            save_score(score)
            console.log(score)
            $("#correct").empty()
            $("#incorrect").empty()
            if (count == 0) {
                enableBut();
                $("#correct").append("That is correct! Proceed to Next Screen");
            }
            if (count == 1) {
                $("#correct").append("That is correct! Now input the last note");
            }
            if (count == 2) {
                $("#correct").append("That is correct! Now input the last two notes");
            }
            console.log("clicked")
            
            //let music = new Audio('A.wav');
            //music.play();
            //music.loop =true;
            //music.playbackRate = 2;
            //music.pause();
        }
        else{
            score -= 1
            save_score(score)
            console.log(score)
            $("#correct").empty()
            $("#incorrect").empty()
            $("#incorrect").append("That is incorrect! try again!");

        }
        
    });
});

