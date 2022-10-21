// import getCocktails from "./src/fetchDrinks";

// let drinks;

let mainView = document.getElementById("mainView");

let getSingleDrink = () => {
  let a = localStorage.getItem("seleDrin");
  let b = JSON.parse(a);
  let singleDrink = b[0];

  let div = document.createElement("div");
  div.classList.add("drink");
  let img = document.createElement("img");
  img.src = `${singleDrink.strDrinkThumb}`;
  img.classList.add("img");
  let para = document.createElement("p");
  para.textContent = `${singleDrink.strDrink}`;
  para.classList.add("name");
  div.appendChild(img);
  div.appendChild(para);
  mainView.appendChild(div);
};

getSingleDrink();