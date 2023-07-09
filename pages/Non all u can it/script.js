// rekomendasi-slider
$(document).ready(function () {
  var multipleCardCarousel = document.querySelector("#carouselExampleControls");

  // Memeriksa apakah lebar jendela layar sesuai dengan media query "(min-width: 576px)"
  if (window.matchMedia("(min-width: 576px)").matches) {
    // Jika lebar jendela layar memenuhi media query, maka slider multiple card akan diinisialisasi menggunakan Bootstrap Carousel
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      // Menonaktifkan otomatis penggantian slide
      interval: false,
      // Tidak mengulang slide ketika mencapai slide terakhir atau pertama
      wrap: false,
    });

    // Menghitung lebar total carousel dan lebar setiap item carousel
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;

    // Event handler untuk tombol next pada carousel
    $("#carouselExampleControls .carousel-control-next").on(
      "click",
      function () {
        // Memeriksa apakah masih ada item slide yang dapat digeser ke kanan
        if (scrollPosition < carouselWidth - cardWidth * 3) {
          // Menggeser posisi scroll ke kanan sejauh lebar satu item slide
          scrollPosition += cardWidth;
          $("#carouselExampleControls .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            600 // Durasi animasi 600ms
          );
        }
      }
    );

    // Event handler untuk tombol prev pada carousel
    $("#carouselExampleControls .carousel-control-prev").on(
      "click",
      function () {
        // Memeriksa apakah masih ada item slide yang dapat digeser ke kiri
        if (scrollPosition > 1) {
          // Menggeser posisi scroll ke kiri sejauh lebar satu item slide
          scrollPosition -= cardWidth;
          $("#carouselExampleControls .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            600 // Durasi animasi 600ms
          );
        }
      }
    );
  } else {
    // Jika lebar jendela layar tidak memenuhi media query, maka slider multiple card akan diinisialisasi menggunakan Bootstrap Carousel
    $(multipleCardCarousel).addClass("slide");
  }
});

// Script untuk tombol tambah dan kurang
const plus = document.querySelector(".plus"), // Tombol tambah
  minus = document.querySelector(".minus"), // Tombol kurang
  num = document.querySelector(".num"); // Element angka
let a = 1; // Variabel angka awal

// Event handler untuk tombol tambah
plus.addEventListener("click", () => {
  a++; // Menambahkan nilai a
  a = a < 10 ? +a : a; // Mengecek apakah a kurang dari 10, jika ya maka angka 0 akan dihilangkan
  num.innerText = a; // Mengubah teks pada elemen angka
});

// Event handler untuk tombol kurang
minus.addEventListener("click", () => {
  // Mengecek apakah a lebih dari 1, jika ya maka nilai a akan dikurangi
  if (a > 1) {
    a--; // Mengurangi nilai a
    a = a < 10 ? +a : a; // Mengecek apakah a kurang dari 10, jika ya maka angka 0 akan dihilangkan
    num.innerText = a; // Mengubah teks pada elemen angka
  }
});
