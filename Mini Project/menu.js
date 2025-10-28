document.addEventListener("DOMContentLoaded", () => {
  const orderButtons = document.querySelectorAll(".order-btn");
  const summaryBox = document.getElementById("order-summary");
  const orderedItem = document.getElementById("ordered-item");

  orderButtons.forEach(button => {
    button.addEventListener("click", () => {
      const itemName = button.dataset.item;
      alert(`You ordered ${itemName}!`);
      orderedItem.textContent = itemName;
      summaryBox.style.display = "block";
    });
  });
});
