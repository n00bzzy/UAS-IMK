$(document).ready(function () {
  $(".manajer-card").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    var filter = $(this).attr("data-filter");
    if (filter == "all") {
      $(".manajer-menu-card").show(0);
    } else {
      $(".manajer-menu-card")
        .not("." + filter)
        .hide(0);
      $(".manajer-menu-card")
        .filter("." + filter)
        .show(0);
    }
  });
});
