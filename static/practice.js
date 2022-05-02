//import sound from '/static/A.mp3'

function disableBut() {
    document.getElementById("next_button").style.visibility= "hidden";
}

function enableBut() {
    document.getElementById("next_button").style.visibility= "visible";
}

function highlight(obj){
    var orig = obj.style.background;
    obj.style.background = 'red';
    setTimeout(function(){
         obj.style.background = orig;
    }, 300);
 }
$(document).ready(function () {
    $("#title").append("<h1>"+lesson["chord"]+"</h1>")
    $("#lessontext").append("<p>"+lesson["text"]+"</p>")
        $("#buttondiv").empty();
        $("#comment").empty()

       //$("#buttondiv").append("<button id = 'next_button'> Next </button>");
  
       document.getElementById(lesson["notes"][0]).className = "green";
       document.getElementById(lesson["notes"][1]).className = "green";

       $("#prev_button").click(function(){
           console.log("HERE")
        window.location.href='/learn/' + lesson["lesson_id"]
        
    })
        playing_notes()
        let missing_num = lesson["notes"][2]
        disableBut();
       $(".key").click(function(){
        $("#comment").empty()


        console.log(this.id)
        if (this.id==missing_num){
            this.style.background = 'green'
            enableBut();
            $("#comment").empty()
            $("#comment").append("<div class = greenText>That is correct! Proceed to Next Screen<div>")
            console.log("clicked")
        
        }
        else{
            highlight(this)
            $("#comment").empty()
            $("#comment").append("<div class = redText>That is incorrect. Try Again!<div>")


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

    $('#popper1').hover(function() {
            $('#pop').toggle();
        });
});

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
        var audio = new Audio();
        audio.src="/static/B5.mp3"
        audio.play();
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





