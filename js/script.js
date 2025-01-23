$(document).ready(function () {
  $("#search-btn").click(function () {
    $(".content").toggle();
  });
  $("#search-close").click(function () {
    $(".content").hide();
  });
});
