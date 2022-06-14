function simpleInterest(principle, rate, year) {
    const interest = (principle * rate * year) / 100;
    return interest;
}
const myInterest = simpleInterest(750, 5, 4);
const myInterestInMonth = simpleInterest(10000, 6, 9 / 12);

console.log(myInterest, myInterestInMonth);