$(document).ready(function () {
  $("#search-btn").click(function () {
    $(".content").toggle();
  });
  $("#search-close").click(function () {
    $(".content").hide();
  });
  $('#filter_button').click(function(){
    $('.filter_menu').toggle();
  })
});
