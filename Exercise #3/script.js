function askFourNumbers () {
    const fourNumbers = [];
    fourNumbers[0] = prompt (`Give me the first number`);
    fourNumbers[1] = prompt (`Please provide a second number`);
    fourNumbers[2] = prompt (`Now the third number`);
    fourNumbers[3] = prompt (`Lastly, the fourth number`);
    for (let i=0; i<fourNumbers.length; i++){
        fourNumbers[i] = Number( fourNumbers[i] );
    }
    return fourNumbers;
}

alert ("Please provide any four different numbers and I'll sum them and multiply them");
const arrayOfNumbers = askFourNumbers ();

function sumNumbersFromArray (placeholder){
    const sumWithInitial = placeholder.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
    );
    return sumWithInitial;
}

function multiplyNumbersFromArray (placeholder){
    const productWithInitial = placeholder.reduce(
        (accumulator, currentValue) => accumulator * currentValue,
    );
    return productWithInitial;
}

const resultSumOfNumbers = sumNumbersFromArray( arrayOfNumbers );
const resultMultiplicationOfNumbers = multiplyNumbersFromArray( arrayOfNumbers );
console.log( `If you sum ${arrayOfNumbers.join(`, `)} you get ${resultSumOfNumbers}, and if you multiply them, you get ${resultMultiplicationOfNumbers}.` );
alert( `If you sum ${arrayOfNumbers.join(`, `)} you get ${resultSumOfNumbers}, and if you multiply them, you get ${resultMultiplicationOfNumbers}.` );