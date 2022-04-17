
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
        let next = lesson['lesson_id']
            console.log(next)
        $("#practice_button").click(function(){
            
            window.location.href='/practice/' + next
        })

});



