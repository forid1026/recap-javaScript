// let array = [10, 20, 14, 98, 78, 65, 45, 35, 24, 65];
// // let array = [0,1,2,3,4,5,6,7,8,9]
// arrayLength = array.length;
// let sum = 0;
// for (let i = 0; i < arrayLength; i++) {
//     const element = array[i];
//     sum += element;
// }
// console.log(sum)




function sumOfArray(numbers) {
    let sum = 0;
    numberLength = numbers.length;
    for (let i = 0; i < numberLength; i++) {
        const number = numbers[i];
        sum += number;
    }
    return sum;
}
let numbers = [10, 20, 14, 98, 78, 65, 45, 35, 24, 65];
const totalSum = sumOfArray(numbers);
console.log(totalSum)

