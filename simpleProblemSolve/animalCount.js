// let miles = -5;
// let animals = 0;
// if(miles < 0){
//     console.log('Please input positive number which is greater than zero!');
// }
// else if (miles <= 10) {
//     animals = miles * 10;
// }
// else if (miles > 10 && miles <= 20) {
//     let firstTen = 10 * 10;
//     let remainingMiles = miles -10;
//     let secondTen = remainingMiles * 50;
//     // console.log(secondTen);  
//     animals = firstTen + secondTen;
// }
// else if (miles > 20) {
//     let firstTen = 10 * 10; //100
//     let secondTen = 20 * 50;  //1000
//     let remainingMiles = miles - 20; //
//     animals = firstTen + secondTen + remainingMiles * 100;

// }
// console.log(animals);


function countAnimals(miles) {
    let animals = 0;
    const firstDenseAnimals = 10;
    const secondDenseAnimals = 50;
    const restDenseAnimals = 100;
    if (miles < 0) {
        return 'Please input positive number which is greater than zero!';
    }
    else if (miles <= 10) {
        animals = miles * firstDenseAnimals;
        return animals;
    }
    else if (miles > 10 && miles <= 20) {
        let firstTen = 10 * firstDenseAnimals;
        let remainingMiles = miles - 10;
        let secondTen = remainingMiles * secondDenseAnimals;
        animals = firstTen + secondTen;
        return animals;
    }
    else {
        let firstTen = 10 * firstDenseAnimals;
        let secondTen = 10 * secondDenseAnimals;
        let remainingMiles = miles - 20;
        animals = firstTen + secondTen + remainingMiles * restDenseAnimals;
        return animals;

    }
}

const totalAnimals = countAnimals(25);
console.log(totalAnimals)