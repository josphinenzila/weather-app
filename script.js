const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c7c09afde6msh9f6bbe05eea7dcdp11fdb0jsnfe8f5cf9e854",
    "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
  },
};

const getWeatherData = async (city) => {
  return fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};

const searchCity = async () => {
  const city = document.getElementById("city-input").value;
  const weatherData = await getWeatherData(city);
  showWeatherData(weatherData);
};

const showWeatherData = (weatherData) => {
  const citynameDiv = document.getElementById("city-name");
  const weathertypeDiv = document.getElementById("weather-type");
  const tempDiv = document.getElementById("temp");
  const mintempDiv = document.getElementById("min-temp");
  const maxtempDiv = document.getElementById("max-temp");

  citynameDiv.innerHTML = weatherData.name;
  weathertypeDiv.innerText = weatherData.weather[0].main;
  tempDiv.innerText = weatherData.main.temp;
  mintempDiv.innerText = weatherData.main.temp_min;
  maxtempDiv.innerText = weatherData.main.temp_max;
};
