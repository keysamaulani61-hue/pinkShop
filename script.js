function addToCart(nama, harga) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ nama, harga });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${nama} telah ditambahkan ke keranjang 🛒`);
}