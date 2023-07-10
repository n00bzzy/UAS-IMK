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