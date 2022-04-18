function disableBut() {
    document.getElementById("next_button").disabled = true;
}

function enableBut() {
    document.getElementById("next_button").disabled = false;
}
$(document).ready(function () {
    $("#title").append("<h1>"+lesson["chord"]+"</h1>")
    $("#lessontext").append("<p>"+lesson["text"]+"</p>")
        $("#buttondiv").empty();
       $("#buttondiv").append("<button id = 'next_button'> Next </button>");
  
       document.getElementById(lesson["notes"][0]).className = "green";
       document.getElementById(lesson["notes"][1]).className = "green";

        playing_notes()
        let missing_num = lesson["notes"][2]
        disableBut();
       $(".key").click(function(){
        $("#correct").empty()
        $("#incorrect").empty()

        console.log(this.id)
        if (this.id==missing_num){
            enableBut();
            $("#correct").empty()
            $("#incorrect").empty()
            $("#correct").append("That is correct! Proceed to Next Screen");
            console.log("clicked")
            
            //let music = new Audio('A.wav');
            //music.play();
            //music.loop =true;
            //music.playbackRate = 2;
            //music.pause();
        }
        else{
            $("#correct").empty()
            $("#incorrect").empty()
            $("#incorrect").append("That is incorrect! try again!");

        }
    })


  $("#next_button").click(function(){
      let next= lesson['next_lesson']
    if (next=="end"){
        window.location.href="/endlearn"
    }
    else{
        window.location.href='/learn/' + next
    }
    })
});

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





