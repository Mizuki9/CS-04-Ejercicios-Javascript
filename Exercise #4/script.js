let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

function returnCoincidencesBetweenTwoArrays( array1, array2, ){
    let trueOrFalse
    let result = [];
    for( let i=0; i<array1.length; i++){
        trueOrFalse = array2.includes( array1[i] );
        if( trueOrFalse===true ) {
            result.push( array1[i] );
        }
    }
    if (result.length===0){
        result.push("No coincidences were found");
    }
    return result;
}

let coincidences = returnCoincidencesBetweenTwoArrays(student1Courses, student2Courses);
console.log(`The two students share the following course(s): ${coincidences.join(`, `)}.`);