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

// Fungsi untuk mengubah Selesai
function toggleAvailability() {
  var button = document.getElementById("toggleButton"); // Mengambil elemen tombol dengan ID "toggleButton"
  var text = button.innerHTML; // Mengambil teks yang ada pada tombol

  if (text === "Tersedia") {
    // Jika teks pada tombol adalah "Belum Selesai"
    button.innerHTML = "Belum Selesai"; // Mengubah teks tombol menjadi "Belum Selesai"
    button.style.backgroundColor = "#FF5858"; // Mengubah warna latar belakang tombol menjadi merah
  } else {
    // Jika teks pada tombol bukan "Selesai"
    button.innerHTML = "Selesai"; // Mengubah teks tombol menjadi "Selesai"
    button.style.backgroundColor = "#44FB04"; // Mengubah warna latar belakang tombol menjadi hijau
  }
}