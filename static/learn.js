
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
    $("#A").click(function(){
        highlight(this)
        var audio = new Audio();
        audio.src="/static/A5.mp3"
        audio.playbackRate = 0.8
        audio.volume=1.0
        audio.play();
    })
    $("#C").click(function(){
        highlight(this)
        var audio = new Audio();
        audio.src="/static/C.wav"
        audio.play();
    })

    $("#Cs").click(function(){
        highlight(this)
        var audio = new Audio();
        audio.src="/static/c_sharp.wav"
        audio.play();

    })

    $("#D").click(function(){
        highlight(this)
        var audio = new Audio();
        audio.src="/static/D.wav"
        audio.play();
    })

    $("#E").click(function(){
        highlight(this)
        var audio = new Audio();
        audio.src="/static/E.wav"
        audio.play();
    })

    $("#F").click(function(){
        highlight(this)
        var audio = new Audio();
        audio.src="/static/F.wav"
        audio.play();
    })

    $("#Fs").click(function(){
        highlight(this)
        var audio = new Audio();
        audio.src="/static/f_sharp.wav"
        audio.play();
    })
    $("#G").click(function(){
        highlight(this)
        var audio = new Audio();
        audio.src="/static/g.wav"
        audio.play();
    })
    $("#B").click(function(){
        highlight(this)
        var audio = new Audio();
        audio.src="/static/B5.mp3"
        audio.playbackRate = 0.8
        audio.volume=1.0
        audio.play();
    })

    $("#highC").click(function(){
        highlight(this)
        var audio = new Audio();
        audio.src="/static/C6.mp3"
        audio.playbackRate = 0.8
        audio.volume=1.0
        audio.play();
    })

    $("#As").click(function(){
        highlight(this)
        var audio = new Audio();
        audio.src="/static/a_sharp.mp3"
        audio.playbackRate = 0.8
        audio.volume=1.0
        audio.play();
    })

    $("#Gs").click(function(){
        highlight(this)
        var audio = new Audio();
        audio.src="/static/g_sharp.mp3"
        audio.playbackRate = 0.8
        audio.volume=1.0
        audio.play();
    })

    $("#Ds").click(function(){
        highlight(this)
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