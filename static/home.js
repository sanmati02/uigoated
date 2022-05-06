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

$(document).ready(function () {
    playing_notes()
});