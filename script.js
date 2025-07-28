import { products } from "./product.js";

const productContainer = document.getElementById("product-container");

products.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.className = "product-card";

  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <button class="btn view-detail">View Detail</button> `;

  productContainer.appendChild(productCard);
});
