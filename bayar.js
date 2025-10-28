document.addEventListener("DOMContentLoaded", () => {
  const total = localStorage.getItem("totalBayar") || 0;
  document.getElementById("total-bayar").textContent = parseInt(total).toLocaleString();
});

function prosesPembayaran() {
  const metode = document.getElementById("metode").value;
  document.getElementById("status").textContent = 
    `✅ Pembayaran melalui ${metode} berhasil! Terima kasih telah berbelanja di PinkShop 💖`;

  // Hapus keranjang setelah pembayaran
  localStorage.removeItem("cart");
  localStorage.removeItem("totalBayar");
}