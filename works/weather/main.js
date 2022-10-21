const card = document.getElementById("card");

const details = document.getElementById("details");

const key = "s2KAhr4cTjL6mGVAZqSe9h9Skf8qBK5o";

const weatherImage = document.getElementById("weatImg");

const icon = document.querySelector("#icon img");

class Weather {
  key = "s2KAhr4cTjL6mGVAZqSe9h9Skf8qBK5o";
  weatherUrl = "https://dataservice.accuweather.com/currentconditions/v1/";
  locationUrl =
    "https://dataservice.accuweather.com/locations/v1/cities/search";

  async modifycitys(currentCity) {
    const cityDets = await this.getCity(currentCity);
    const weather = await this.getCityWeatherInformation(cityDets.Key);

    return { cityDets, weather };
  }

  async getCity(currentCity) {
    const query = `?apikey=${this.key}&q=${currentCity}`;
    const response = await fetch(this.locationUrl + query);
    const data = await response.json();
    return data[0];
  }

  async getCityWeatherInformation(id) {
    const query = `${id}?&apikey=${this.key}`;
    const response = await fetch(this.weatherUrl + query);
    const data = await response.json();
    return data[0];
  }
}

let weather = new Weather();

const updateUI = (data) => {
  const cityDets = data.cityDets;
  const weather = data.weather;

  details.innerHTML = `
    <p>City:  ${cityDets.EnglishName}</p>
    <p>Weather:  ${weather.WeatherText}</p>
    <div>
      <span>Temp:  ${weather.Temperature.Metric.Value}</span>
      <span>&deg; C</span>
    </div>`;

  if (card.classList.contains("det")) {
    card.classList.remove("det");
  }
};

let cityForm = document.getElementById("cityForm");

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const currentCity = cityForm.city.value.trim();

  cityForm.reset();

  localStorage.setItem("city", currentCity);

  weather
    .modifycitys(currentCity)
    .then((data) => updateUI(data))
    .catch((error) => console.log(error));
});

// if (localStorage.getItem("city")) {
//   let a = localStorage.getItem("city");
//   console.log(a);
//   modifyCitys(localStorage.getItem("city"))
//     .then((data) => updateUI(data))
//     .catch((error) => console.log(error));
// }
