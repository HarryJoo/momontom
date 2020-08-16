const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintBackgroundImage(imgNumber) {
    const image = new Image;
    const imgDir = `images/${imgNumber + 1}.jpg`;

    image.src = imgDir;
    image.classList.add("bgImage");

    body.prepend(image);
}

function generateRandomNumber() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = generateRandomNumber();
    paintBackgroundImage(randomNumber);
}

init();