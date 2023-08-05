module.exports = function reverse(n) {

    let arrayOfIncomingNumbers = Array.from(String(Math.abs(n)));
    let reverseArrayOfNumbers = [];

    for (let i = arrayOfIncomingNumbers.length; i > 0; i--) {
        reverseArrayOfNumbers.push(arrayOfIncomingNumbers[i - 1]);
    }

    return reverseArrayOfNumbers.join('')
}
