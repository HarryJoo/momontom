const weather = document.querySelector(".js-weather");

const API_KEY = "01cad9e425eb25aee8778a8ea6b61001";
const COORDS = "coords";
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";

function getURL(lat, lon) {
    const PARAMS = `?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const weatherURL = `${WEATHER_API_URL}${PARAMS}`;

    return weatherURL;
}

function getWeather(lat, lon) {
    const weatherURL = getURL(lat, lon);
    fetch(
        weatherURL
    ).then(function (response) {
        return response.json();
    }).then(function (json) {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerHTML = `${temperature} ℃ ${place}`;
    })
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Can't access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();