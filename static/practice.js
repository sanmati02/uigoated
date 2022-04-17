$(document).ready(function () {
    $("#title").append("<h1>"+lesson["chord"]+"</h1>")
    $("#lessontext").append("<p>"+lesson["text"]+"</p>")
        $("#buttondiv").empty();
       $("#buttondiv").append("<button id = 'next_button'> Next </button>");
  
       document.getElementById(lesson["notes"][0]).className = "green";
       document.getElementById(lesson["notes"][1]).className = "green";
        let missing_num = lesson["notes"][2]
       $("button").click(function(){
        $("#correct").empty()
        $("#incorrect").empty()

        console.log(this.id)
        if (this.id==missing_num){
            $("#correct").empty()
            $("#incorrect").empty()
            $("#correct").append("That is correct! Proceed to Next Screen");
            console.log("clicked")
        }
        else{
            $("#correct").empty()
            $("#incorrect").empty()
            $("#incorrect").append("That is incorrect! try again!");

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
});



