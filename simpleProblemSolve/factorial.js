//5! = 5*4*3*2*1
// let num = 5, fact = 1;
// for (let i = 1; i <= 5; i++) {
//     fact *= i;
//     console.log(fact);

// }



function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}
const factorialValue  = factorial(7);
console.log(factorialValue);