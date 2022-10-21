let searchInput = document.getElementById("search");

let addInput = document.getElementById("add");

let items = document.getElementById("items");

function newLi(lisItm) {
  let listItems = `
      <li>${lisItm}
      <button class="fa-solid fa-trash-can delete" ></button>
      </li>
    `;
  items.innerHTML += listItems;
}

addInput.addEventListener("submit", (e) => {
  e.preventDefault();
  let lisItm = addInput.add.value.trim();
  if (lisItm.length) {
    newLi(lisItm);
    addInput.add.value = "";
  }
});

items.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

function keyUp(searItm) {
  Array.from(items.children)
    .filter((todo) => {
      return todo.textContent.toLowerCase().includes(searItm);
    })
    .forEach((todo) => {
      todo.classList.remove("filtered");
    });
  Array.from(items.children)
    .filter((todo) => {
      return !todo.textContent.toLowerCase().includes(searItm);
    })
    .forEach((todo) => {
      todo.classList.add("filtered");
    });
}

searchInput.addEventListener("keyup", () => {
  let searItm = searchInput.search.value.toLowerCase().trim();
  keyUp(searItm);
});
