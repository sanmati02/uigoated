$(document).ready(function () {
    $("#title").append("<h1>"+lesson["chord"]+"</h1>")
    $("#lessontext").append("<p>"+lesson["text"]+"</p>")
    if (lesson["lesson_id"] % 2 == 1) {
        $("#buttondiv").empty();
        $("#buttondiv").append("<button id = 'next_button'>Practice </button>");
        $.each(lesson["notes"], function (index, item) {
            var div = document.getElementById(item);
            console.log(item)
            div.className = "green";
        });
    }
    else {
        $("#buttondiv").empty();
        $("#buttondiv").append("<button id = 'next_button'>Next </button>");
        document.getElementById(lesson["notes"][0]).className = "green";
        document.getElementById(lesson["notes"][1]).className = "green";
    }
});