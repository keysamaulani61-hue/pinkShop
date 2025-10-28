document.addEventListener("DOMContentLoaded", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Keranjang masih kosong 😢</p>";
  } else {
    let total = 0;
    cartContainer.innerHTML = cart.map(item => {
      total += item.harga;
      return `<div class="product">
                <h3>${item.nama}</h3>
                <p>Rp ${item.harga.toLocaleString()}</p>
              </div>`;
    }).join("");
    totalPrice.textContent = total.toLocaleString();
    localStorage.setItem("totalBayar", total);
  }
});