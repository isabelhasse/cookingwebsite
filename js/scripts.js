//Business logic

var cupsToTbs = function(input) {
  return input * 16;
};

var tbsToCups = function(input) {
  return input / 16;
};




//UI Logic

$(document).ready(function() {
  $("form#tbsToCups").submit(function(event) {

    event.preventDefault();
    var conversion = $("#conversion").val();
    var input = parseInt($("#input").val());
    if(conversion === "tbsToCups"){
      var result = tbsToCups(input);
    };
    if(conversion === "cupsToTbs") {
      var result = cupsToTbs(input);
    };
    $("#result").text(result);
  });
});
