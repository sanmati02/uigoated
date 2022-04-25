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
}

$(document).ready(function () {
    playing_notes()
});