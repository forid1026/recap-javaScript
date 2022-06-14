//(fahrenheit°F − 32) × 5/9 = 0°C

function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}
const myCelsius = fahrenheitToCelsius(100);

console.log(myCelsius.toFixed(4));