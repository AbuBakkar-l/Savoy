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
  let isVisible = false;
  $("#trigger-cart").click(function () {
      const content = $(".cart-content");
      if (!isVisible) {
        content.css("right", "0px" ); 
          isVisible = true;
      } else {
        content.css("right", "-300px" ); 
          isVisible = false;
      }
  });
  $("#cart-close").click(function () {
    $('.cart-content').hide('fast');
    // const content = $(".cart-content");
    //   content.css("right", "-300px" ); 
    }
  );
});


