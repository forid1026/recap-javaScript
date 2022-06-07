var friendAge = [20,22,23,25];
// console.log(friendAge)
// console.log(friendAge.length)
// console.log(friendAge[0])

console.log( friendAge.indexOf(20));
console.log( friendAge.indexOf(220));
console.log(friendAge[3]);
console.log(friendAge);
friendAge[2]  = 30;
console.log(friendAge);
friendAge.push(100);
console.log(friendAge)

// remove element from an array
var name  =  ['kalam', 'nalam', 'jalam', 'Balam'];
console.log(name);
console.log(name.pop());
console.log(name);
var firstElement = name.shift();
console.log(firstElement);

// add element form the beginning
var addElement = name.unshift('Farid'); 
console.log(name)
