// let numbers = [12, 21, 45, 74, 35, 1, 35];
// let minElement = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     if (element <= minElement) {
//         minElement = element;
//     }
// }
// console.log(minElement)


function minElement(numbers) {
    let minElement = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element <= minElement) {
            minElement = element;
        }
    }
    return minElement;
}
let numbers = [12, 21, 45, 74, 35, 1, 35];
const lowestElement = minElement(numbers);
console.log(lowestElement)