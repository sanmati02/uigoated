
function disableBut() {
    document.getElementById("next_button").style.visibility= "hidden";
}

function enableBut() {
    document.getElementById("next_button").style.visibility= "visible";
}

function highlight(obj){
    if (practice_q_finished){
        var orig = obj.style.background;
        obj.style.background = 'grey';
        x = setTimeout(function(){
            obj.style.background = orig;
        }, 100);
    }    
 }

let practice_q_finished = false


$(document).ready(function () {
    $("#title").append("<h1>"+lesson["chord"]+"</h1>")
    $("#lessontext").append("<p>"+lesson["text"]+"</p>")
        $("#buttondiv").empty();
        document.getElementById("comment").style.visibility= "hidden";
        practice_q_finished = false
        

       //$("#buttondiv").append("<button id = 'next_button'> Next </button>");
  
       document.getElementById(lesson["notes"][0]).className = "green";
       document.getElementById(lesson["notes"][1]).className = "green";

       $("#prev_button").click(function(){
           console.log("prev_lesson; " +lesson["prev_lesson"])
        window.location.href='/learn/' + lesson["prev_lesson"]
        
    })
        playing_notes()
        let missing_num = lesson["notes"][2]
        disableBut();
        $(".key").click(function(){
            console.log(practice_q_finished)
            $('#comment').removeClass('greenText');
            $('#comment').removeClass('redText');

            if (practice_q_finished == false){
                if (this.id==missing_num){
                    //this.style.background = 'green'
                    this.className = 'green'
                    enableBut();
                    document.getElementById("comment").style.visibility= "visible";
                    $("#comment").text("That is correct! Proceed to Next Screen")
                    $('#comment').addClass('greenText');
                    practice_q_finished = true
                }
                else{
                    this.style.background = 'red'
                    document.getElementById("comment").style.visibility= "visible";
                    $('#comment').addClass('redText');
                    $("#comment").text("That is incorrect. Try Again!")
    
    
                }
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
    $("#C5").click(function(){
        highlight(this)
        var audio = new Audio();
        audio.src="/static/wav/" + this.id + ".wav"
        audio.playbackRate = 0.8
        audio.volume=1.0
        audio.play();
    })

    $("#Db5").click(function(){
        highlight(this)
        var audio = new Audio();
        audio.src="/static/wav/" + this.id + ".wav"
        audio.playbackRate = 0.8
        audio.volume=1.0
        audio.play();
    })

    $("#D5").click(function(){
        highlight(this)
        var audio = new Audio();
        audio.src="/static/wav/" + this.id + ".wav"
        audio.playbackRate = 0.8
        audio.volume=1.0
        audio.play();
    })

    $("#Eb5").click(function(){
        highlight(this)
        var audio = new Audio();
        audio.src="/static/wav/" + this.id + ".wav"
        audio.playbackRate = 0.8
        audio.volume=1.0
        audio.play();
    })

    $("#E5").click(function(){
        highlight(this)
        var audio = new Audio();
        audio.src="/static/wav/" + this.id + ".wav"
        audio.playbackRate = 0.8
        audio.volume=1.0
        audio.play();
    })

    $("#F5").click(function(){
        highlight(this)
        var audio = new Audio();
        audio.src="/static/wav/" + this.id + ".wav"
        audio.playbackRate = 0.8
        audio.volume=1.0
        audio.play();
    })

    $("#Gb5").click(function(){
        highlight(this)
        var audio = new Audio();
        audio.src="/static/wav/" + this.id + ".wav"
        audio.playbackRate = 0.8
        audio.volume=1.0
        audio.play();
    })

    $("#G5").click(function(){
        highlight(this)
        var audio = new Audio();
        audio.src="/static/wav/" + this.id + ".wav"
        audio.playbackRate = 0.8
        audio.volume=1.0
        audio.play();
    })

    $("#Ab5").click(function(){
        highlight(this)
        var audio = new Audio();
        audio.src="/static/wav/" + this.id + ".wav"
        audio.playbackRate = 0.8
        audio.volume=1.0
        audio.play();
    })

    $("#A5").click(function(){
        highlight(this)
        var audio = new Audio();
        audio.src="/static/wav/" + this.id + ".wav"
        audio.playbackRate = 0.8
        audio.volume=1.0
        audio.play();
    })

    $("#Bb5").click(function(){
        highlight(this)
        var audio = new Audio();
        audio.src="/static/wav/" + this.id + ".wav"
        audio.playbackRate = 0.8
        audio.volume=1.0
        audio.play();
    })

    $("#B5").click(function(){
        highlight(this)
        var audio = new Audio();
        audio.src="/static/wav/" + this.id + ".wav"
        audio.playbackRate = 0.8
        audio.volume=1.0
        audio.play();
    })

    $("#C6").click(function(){
        highlight(this)
        var audio = new Audio();
        audio.src="/static/wav/" + this.id + ".wav"
        audio.playbackRate = 0.8
        audio.volume=1.0
        audio.play();
    })

    $("#Db6").click(function(){
        highlight(this)
        var audio = new Audio();
        audio.src="/static/wav/" + this.id + ".wav"
        audio.playbackRate = 0.8
        audio.volume=1.0
        audio.play();
    })

    $("#D6").click(function(){
        highlight(this)
        var audio = new Audio();
        audio.src="/static/wav/" + this.id + ".wav"
        audio.playbackRate = 0.8
        audio.volume=1.0
        audio.play();
    })

    $("#Eb6").click(function(){
        highlight(this)
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