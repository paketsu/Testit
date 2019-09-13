const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min +1) + min);
}

const addition = (accumulator, currentValue) => accumulator + currentValue;
let numbers = [];
let result = 0;

const createCalculation = (amountOfNumbers, operator, maxResult) => {
    if (numbers.length < amountOfNumbers) {
        numbers.push(getRandomNumber(0,10));
        createCalculation(amountOfNumbers, operator, maxResult);
    } else if (maxResult < numbers.reduce(addition)) {
        numbers.pop();
        createCalculation(amountOfNumbers, operator, maxResult);
    } else {
        result = numbers.reduce(addition);
        console.log(numbers.toString());
        console.log(result);
        return;
    }
}

// Kutsutaan funktiota ja syötetään siihen parametrit:
// (arvottavien lukujen määrä, laskutoimitus ja maksimisumma)
createCalculation(3, addition, 20);
