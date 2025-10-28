const fruits = ["Apple 🍎", "Banana 🍌", "Mango 🥭", "Orange 🍊", "Grapes 🍇"];
const fruitList = document.getElementById("fruit-list");

for (let fruit of fruits) {
  const li = document.createElement("li");
  li.className = "list-group-item list-group-item-action";
  li.innerText = fruit;
  fruitList.appendChild(li);
}
