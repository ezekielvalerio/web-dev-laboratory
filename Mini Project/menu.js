document.addEventListener("DOMContentLoaded", () => {
  const menuData = [
    {
      category: "Frappes",
      items: [
        { name: "Double Choco Frappe", price: 150 },
        { name: "Flakes Frappe", price: 145 },
        { name: "Caramel Frappe", price: 160 },
        { name: "Hazelnut Heaven", price: 170 },
      ],
    },
    {
      category: "Espresso",
      items: [
        { name: "Mocha", price: 120 },
        { name: "White Mocha", price: 130 },
        { name: "Vanilla Latte", price: 140 },
        { name: "Honey Cinnamon Latte", price: 150 },
      ],
    },
    {
      category: "Black Coffee",
      items: [
        { name: "Pure Black", price: 90 },
        { name: "Cold Brew", price: 100 },
        { name: "House Blend", price: 110 },
      ],
    },
  ];

  const menuList = document.getElementById("menu-list");

  menuData.forEach(category => {
    const categoryItem = document.createElement("li");
    categoryItem.textContent = category.category;

    const subList = document.createElement("ul");

    category.items.forEach(product => {
      const subItem = document.createElement("li");
      subItem.innerHTML = `
        ${product.name}
        <span class="price">₱${product.price}</span>
        <button class="order-btn" data-item="${product.name}">Order Now</button>
      `;
      subList.appendChild(subItem);
    });

    categoryItem.appendChild(subList);
    menuList.appendChild(categoryItem);
  });

  const orderSummary = document.getElementById("order-summary");
  const orderedItem = document.getElementById("ordered-item");

  menuList.addEventListener("click", e => {
    if (e.target.classList.contains("order-btn")) {
      const itemName = e.target.dataset.item;
      alert(`You ordered ${itemName}!`);
      orderedItem.textContent = itemName;
      orderSummary.style.display = "block";
    }
  });
});
