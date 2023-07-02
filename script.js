$(document).ready(function () {
  $(".cat-card").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    var filter = $(this).attr("data-filter");
    if (filter == "all") {
      $(".menu-card").show(0);
    } else {
      $(".menu-card")
        .not("." + filter)
        .hide(0);
      $(".menu-card")
        .filter("." + filter)
        .show(0);
    }
  });
});
