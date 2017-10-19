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
    if(conversion === tbsToCups){
      alert("hi");
      var input = parseInt($("#input").val());
      var result = tbsToCups(input);
      $("#result").text(result);
    };
    if(conversion === cupsToTbs) {
      var input = parseInt($("#input").val());
      var result = cupsToTbs(input);
      $("#result").text(result);
    };
  });
});
