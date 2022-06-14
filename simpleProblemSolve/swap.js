let first = 10;
let second = 20;
console.log(first, second);
// var temp = first; //10
// first = second; // 20
// second = temp;
// console.log(first, second);

[first, second] = [second, first];
console.log(first, second);

