let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

async function getCocktails() {
  const response = await fetch(url);
  const data = await response.json();
  return data.drinks;
}

// export default getCocktails;
