
$(document).ready(function () {
    $("#title").append("<h1>"+lesson["chord"]+"</h1>")
    $("#lessontext").append("<p>"+lesson["text"]+"</p>")
        $("#buttondiv").empty();
       $("#buttondiv").append("<button id = 'practice_button'> Practice </button>");
        $.each(lesson["notes"], function (index, item) {
            var div = document.getElementById(item);
            console.log(item)
            div.className = "green";

        });

        playing_notes()

        let next = lesson['lesson_id']
            console.log(next)
        $("#practice_button").click(function(){
            
            window.location.href='/practice/' + next
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

    $("#Cc").click(function(){
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

    $("#Ff").click(function(){
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




