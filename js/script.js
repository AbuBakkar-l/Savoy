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
    $("#popup").show();
});
$(".close").click(function () {
    $("#popup").hide(); 
});
  // cart 
  $("#trigger-cart").click(function () {
    const content = $(".cart-content");
    content.show('fast');
});
  $(".cart-close").click(function () {
    $('.cart-content').hide('fast');
    }
  );
});


