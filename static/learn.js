
$(document).ready(function () {
    $("#title").append("<h1 >"+lesson["chord"]+"</h1>")
    $("#lessontext").append("<p>"+lesson["text"]+"</p>")
    
        //$("#buttondiv").empty();
       //$("#buttondiv").append("<button id = 'practice_button'> Practice </button>");
        $.each(lesson["notes"], function (index, item) {
            var div = document.getElementById(item);
            console.log(item)
            div.className = "green";

        });
        console.log("here")
        console.log(lesson["prev_lesson"])

        $("#prev_button").click(function(){
            console.log(lesson["prev_lesson"])
            if (lesson["prev_lesson"] == "start"){
                window.location.href='/'
            }
            else{  
            window.location.href='/practice/' + lesson["prev_lesson"]
            }
        })

        playing_notes()
        
        let next = lesson['next_lesson']
            console.log(next)
        $("#practice_button").click(function(){
            
            window.location.href='/practice/' + next
        })

        $('#popper1').hover(function() {
            $('#pop').toggle();
        });

});
function highlight(obj){
    var orig = obj.style.background;
    obj.style.background = 'gray';
    setTimeout(function(){
         obj.style.background = orig;
    }, 100);
 }

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