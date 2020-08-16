const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = `${hours < 10 ? `0${hours}` : hours}`;
    minutes = `${minutes < 10 ? `0${minutes}` : minutes}`;
    seconds = `${seconds < 10 ? `0${seconds}` : seconds}`;

    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();