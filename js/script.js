$(document).ready(function () {
  $("#search-btn").click(function () {
    $(".content").toggle();
  });
  $("#search-close").click(function () {
    $(".content").hide();
  });
  $('#filter_button').click(function(){
    $('.filter_menu').toggle();
  });
  $("#popup-trigger").click(function () {
    $("#popup").show(); // Show the popup
});

// Bind the close button click event outside of the trigger
$(".close").click(function () {
  console.log("Close button clicked");
    $("#popup").hide(); // Hide the popup
});
  
});

