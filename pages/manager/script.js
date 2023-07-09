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

// Fungsi untuk mengubah ketersediaan
function toggleAvailability() {
  var button = document.getElementById("toggleButton"); // Mengambil elemen tombol dengan ID "toggleButton"
  var text = button.innerHTML; // Mengambil teks yang ada pada tombol

  if (text === "Tersedia") {
    // Jika teks pada tombol adalah "Tersedia"
    button.innerHTML = "Tidak Tersedia"; // Mengubah teks tombol menjadi "Tidak Tersedia"
    button.style.backgroundColor = "#FF5858"; // Mengubah warna latar belakang tombol menjadi merah
  } else {
    // Jika teks pada tombol bukan "Tersedia"
    button.innerHTML = "Tersedia"; // Mengubah teks tombol menjadi "Tersedia"
    button.style.backgroundColor = "#44FB04"; // Mengubah warna latar belakang tombol menjadi hijau
  }
}
