// Script untuk memfilter menu makanan dan minuman
$(document).ready(function () {
  
  // Menambahkan class active pada elemen yang diklik, sehingga akan memiliki warna kuning
  $(".cat-card").click(function () {
    $(this).addClass("active").siblings().removeClass("active");

    // Mengambil nilai atribut "data-filter" dari elemen yang diklik
    var filter = $(this).attr("data-filter");

    // Jika filter bernilai "all", maka semua menu akan ditampilkan
    if (filter == "all") {
      $(".menu-card").show(0);

      // Menu yang ditampilkan adalah semua menu yang ada, dari makanan hingga minuman
    } else {
      // Menyembunyikan menu yang tidak sesuai dengan filter yang dipilih
      $(".menu-card")
        .not("." + filter)
        .hide(0);

      // Menampilkan menu yang sesuai dengan filter yang dipilih
      $(".menu-card")
        .filter("." + filter)
        .show(0);
    }
  });
});
