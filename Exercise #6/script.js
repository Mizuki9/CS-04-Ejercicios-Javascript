let array = [3, 6, 12, 5, 100, 1];

function swapHigherValuesToTheRight (array){
    for (i=0; i<array.length; i++) {
        if( array[i]>array[i+1] ) {
            let tempVariable = array[i];
            array [i] = array[i+1];
            array[i+1] = tempVariable;
        }
    }
}

function checkIfValuesAreArrangedLowerToHigher (array){
    let result
    for (i=0; i<array.length; i++) {
        if ( array[i]>array[i+1] ){
            result = false;
            break;
        }
    }
    return result;
}

function bubbleAlgorithm( array ) {
    for (;checkIfValuesAreArrangedLowerToHigher(array)===false;){
    swapHigherValuesToTheRight(array);
    }
}

console.log(array);
bubbleAlgorithm(array);
console.log(array);