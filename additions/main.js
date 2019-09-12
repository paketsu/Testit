// Arvotaan eka numero välillä 0-10:
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min +1) + min);
}

// Asetetaan arvotut numerot näkymään (lopputulos piilotetaan lopullisessa versiossa):
const setNumbers = (first, second, third) => {
    document.getElementById("placeForNumber1").innerHTML = first;
    document.getElementById("placeForNumber2").innerHTML = second;
    document.getElementById("placeForResult").innerHTML = third;
}

// Arvotaan laskutoimituksen numerot:
const createCalculation = () => {
    let number1 = getRandomNumber(0,10);
    let number2 = getRandomNumber(0,10);
    let result = number1 + number2;
    result > 10 ? createCalculation()
    : setNumbers(number1, number2, result);
}

createCalculation();
