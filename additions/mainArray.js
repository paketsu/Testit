const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min +1) + min);
}

const addition = (accumulator, currentValue) => accumulator + currentValue;

const createCalculation = (amountOfNumbers, operator, maxResult) => {
    let numbers = [];
    let result = 0;
    const recreate = (removeNumber) => {
        if(removeNumber) {
            numbers.pop();
        }
        createCalculation(amountOfNumbers, operator, maxResult);
    }
    while (numbers.length < amountOfNumbers) {
        let newNumber = getRandomNumber(0,10);
        numbers.push(newNumber);
        result = numbers.reduce(operator);
    }
    numbers.length !== amountOfNumbers ? recreate() :
        result > maxResult ? recreate(true) 
        : console.log(numbers.toString());
        console.log(result);
}

// Kutsutaan funktiota ja syötetään siihen parametrit:
// (arvottavien lukujen määrä, laskutoimitus ja maksimisumma)
createCalculation(3, addition, 20);
