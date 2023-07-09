// Script untuk memfilter menu-manajer
$(document).ready(function () {

  // Ketika elemen dengan class "manajer-card" diklik, fungsi click() akan dijalankan
  $(".manajer-card").click(function () {
    $(this).addClass("active").siblings().removeClass("active");

    // Mengambil nilai atribut "data-filter" dari elemen yang diklik
    var filter = $(this).attr("data-filter");

    // Jika filter bernilai "all", maka semua menu-manajer akan ditampilkan
    if (filter == "all") {
      $(".manajer-menu-card").show(0);
    } else {
      // Menyembunyikan menu-manajer yang tidak sesuai dengan filter yang dipilih
      $(".manajer-menu-card")
        .not("." + filter)
        .hide(0);

      // Menampilkan menu-manajer yang sesuai dengan filter yang dipilih
      $(".manajer-menu-card")
        .filter("." + filter)
        .show(0);
    }
  });
});
