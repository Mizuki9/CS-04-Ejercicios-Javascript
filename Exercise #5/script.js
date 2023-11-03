let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log( `There was once a group of friends: ${people.join(`, `)}.` );

function removeSpecificElementFromArray (element, array){
    for( let i=0; i<array.length; i++){
        if( array[i]===element ){
            array.splice(i,1);
        }
    }
}

removeSpecificElementFromArray( "Dani", people );
console.log( `Then one of them saw a duck trying to cross the road, helped it, and embarked on a lifelong journey to save all the ducks in the planet. So only ${people.join(`, `)} remained friends.` );

removeSpecificElementFromArray( "Juan", people );
console.log( `One day, the four of them decided to have a competition of holding their breath underwater for as long as they could, last standing would win. Most of them gave up when they needed air, but one it took so far that they drowned. ${people.join(`, `)} went to their funeral in scuba diving suits to show their respects.` );

function moveElementToIndexZero (element, array){
    if (array.includes(element)){
        removeSpecificElementFromArray (element, array);
        array.unshift(element);
    }
}

moveElementToIndexZero ("Luis", people);
console.log( `${people.join(`, `)} were very extreme people, as this story may have already highlighted. So they decided to look for Dani and ended up organizing a super duper mega awesome duck party. It was nice to see him for one party at least after such a long time.` );

people.push ("Mirta");
console.log(`${people.join(`, `)} is the current list for this programming exercise. I'd rather not do a self-insert in the story, so if someone reads this, feel free to think of what happens next.`);

function printOutEachElementUntilOneIsFound (element, array){
    for( i=0; i<array.length; i++ ){
        console.log( array[i] );
        if (array[i]===element){
            break;
        }
    }
}

printOutEachElementUntilOneIsFound ("Maria", people);

function printOutTheIndexOfAnElement (element, array){
    console.log(`${element}'s index number: ${array.indexOf(element)}` );
}

printOutTheIndexOfAnElement ("Maria", people);