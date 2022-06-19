let myString = 'Hello';
let reverse = '';
for (let i = 0; i < myString.length; i++) {
    const element = myString[i];
    reverse = element + reverse;
    console.log(reverse);
}
