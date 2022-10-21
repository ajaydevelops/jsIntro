// const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";
// import getCocktails from "./src/fetchDrinks";

let drinks;

let filteredDrinks;

let mainView = document.getElementById("mainView");

getCocktails().then((data) => {
  drinks = data;
  filteredDrinks = drinks;
  addDrink();
});

let addDrink = () => {
  mainView.innerHTML = "";

  for (let i = 0; i < filteredDrinks.length; i++) {
    let link = document.createElement("a");
    link.href = "./drink.html";
    let div = document.createElement("div");
    div.classList.add("drink");
    let img = document.createElement("img");
    img.src = `${filteredDrinks[i].strDrinkThumb}`;
    img.classList.add("img");
    let paraBox = document.createElement("div");
    paraBox.classList.add("paraBox");
    let para = document.createElement("p");
    para.textContent = `${filteredDrinks[i].strDrink}`;
    para.classList.add("name");
    paraBox.appendChild(para);
    div.appendChild(img);
    div.appendChild(paraBox);
    link.appendChild(div);
    mainView.appendChild(link);
  }
  let n;
  mainView.addEventListener("click", (e) => {
    let currenSrc = e.target.src;
    let a = drinks.filter((element) => currenSrc === element.strDrinkThumb);
    let stringify = JSON.stringify(a);
    window.localStorage.setItem("seleDrin", stringify);
  });
};

let search = document.getElementById("search");

search.addEventListener("keyup", (e) => {
  e.preventDefault();
  let value = e.target.value.trim();
  filteredDrinks = drinks.filter((element) =>
    element.strDrink.toLowerCase().startsWith(value)
  );
  if (filteredDrinks.length === 0) {
    mainView.innerHTML = "Sorry, No Drinks Matched Your Search";
  } else {
    addDrink();
  }
});
