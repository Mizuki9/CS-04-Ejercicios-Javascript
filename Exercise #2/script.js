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

alert ("Please provide any four different numbers and I'll double them");
const exampleNumbers = askFourNumbers ();

function doubleNumericalValue( placeholder ) {
    const map = placeholder.map( (n) => n * 2 );
    return map;
}

let resultNumbers = doubleNumericalValue(exampleNumbers);
console.log( resultNumbers );

function showEachDoubledDigitAlert( originalNumbers, doubledNumbers ) {
    for (let  i=0;  i<originalNumbers.length;  i++){
	alert (`The number you provided is ${ originalNumbers[i]} and the result of doubling it is ${ doubledNumbers[i] }` );
    }
}

showEachDoubledDigitAlert( exampleNumbers, resultNumbers);