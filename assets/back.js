var GIFS = ["cat", "Notebook", "Nobody", "King"];

function clickAsign() {
$(".button").on("click", function() {
    var person = $(this).attr("data-val1");

    $.ajax({
      url: "https://api.giphy.com/v1/gifs/search",
      method: "GET",
      data:{q:person,"api_key":"2E0td7QshXaYz3LAhXOoSIJm5rERcRth",limit:"10"}
    })
      .then(function(response) {
        var results = response.data;
        console.log(response);
        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div class='item'>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height_still.url);
          personImage.attr("data-still",results[i].images.fixed_height_still.url);
          personImage.attr("data-animate",results[i].images.fixed_height.url);
          personImage.attr("data-state","still");
          personImage.attr("class","gif");
          
        //   <img src="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" data-still="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" data-animate="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200.gif" data-state="still" class="gif"></img>
        
          gifDiv.prepend(p);
          gifDiv.prepend(personImage);

          $("#gifs-appear-here").prepend(gifDiv);
          
        }
        aniGif();
      });
  });
};

  $("#add-btn").on("click", function() {
    event.preventDefault();
    var val = $("#GIF-input").val();
    GIFS.push(val);
    $("#btnhld").empty();
    renderButtons();
    clickAsign();

  });

  function renderButtons() {

    $(GIFS).each(function(i,element) {
    var b = $("<div>");
    $(b).text(element);
    $(b).attr("class","button col-12 col-sm-3 col-md-2 col-lg-1");
    $(b).attr("data-val1",element);
    $(b).text(element);
    $("#btnhld").append(b);
    });

  };
  function aniGif() {
    $(".gif").on("click", function() {
        
        var state = $(this).attr("data-state");
        console.log(state);
        
        if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
        } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
        }
    });
  };

  

  renderButtons();
  clickAsign();

/* <div class="button col-12 col-sm-3 col-md-2 col-lg-1" data-person="arnold schwarzenegger">
button
</div> */