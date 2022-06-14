// n*(n-1)
// 5*(5-1)


function factorial(number) {
        if (number == 1) {
            return 1;
        }
        else{
            return number*factorial(number-1);
    }
}
const myFactorial  = factorial(5);
console.log(myFactorial);
