// const fib = [0, 1];
// for (i = 2; i <= 10; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
// }
// console.log(fib);


function fibonacciSeries(number) {
    if (number != 'number') {
        return 'please enter number';
    }
    if (number < 2) {
        return 'please enter a positive number which is greater than 1';
    }
    const fib = [0, 1];
    for (i = 2; i <= number; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

const fiboNumber = fibonacciSeries(1);
console.log(fiboNumber);