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
          personImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(personImage);

          $("#gifs-appear-here").prepend(gifDiv);
        }
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

  

  renderButtons();
  clickAsign();

/* <div class="button col-12 col-sm-3 col-md-2 col-lg-1" data-person="arnold schwarzenegger">
button
</div> */