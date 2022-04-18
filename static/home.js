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

$(document).ready(function () {
    playing_notes()
});