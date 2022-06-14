function factorial(num){
    let i = num;
    let fact = 1;
    while(i >= 1){
        fact*=i;
        i--;
    }
    return fact;
}
const myFactorial = factorial(5);
console.log(myFactorial);