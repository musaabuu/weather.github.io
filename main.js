

const weatherForm = document.querySelector(".input-form");
const cityInput = document.querySelector(".input-city");
const card = document.querySelector(".weather-card");
const apiKey = "e6b34cbe14f40385d1790aaa66f2e3e0";


weatherForm.addEventListener("submit", async event => {

    event.preventDefault();
    const city = cityInput.value;

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch (error) {
            console.log(error);
        }
    }

});

async function getWeatherData(city) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiURL);
    return await response.json();
}

function displayWeatherInfo(data) {
    const {name: city, main: {feels_like, humidity, pressure, temp}, sys: {country}, weather: [{description}]} = data;

    const countryDisplay = document.createElement("h1");
    const cityDisplay = document.createElement("span");
    const tempDisplay = document.createElement("h2");
    const humidityDisplay = document.createElement("p");
    const pressuredisplay = document.createElement("p");
    const descriptionDisplay = document.createElement("p");
    const feelslike = document.createElement("p");

    countryDisplay.textContent = country;
    cityDisplay.textContent = city;
    tempDisplay.textContent = `${temp}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    pressuredisplay.textContent = `${pressure}hPa`;
    descriptionDisplay.textContent = description;
    feelslike.textContent = `Feels like: ${feels_like}°C`;

    // card.append(countryDisplay);
    card.append(cityDisplay);
    card.append(tempDisplay);
    card.append(humidityDisplay);
    card.append(pressuredisplay);
    card.append(descriptionDisplay);
    card.append(feelslike);
}