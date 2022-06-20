// feet to inches
function feetToInch(feet) {
    const inch = feet * 12;
    return inch;
}
const totalInch = feetToInch(12);
console.log('Inch is = ', totalInch);

// centimeter To Meter
function centimeterToMeter(centimeter) {
    const meter = centimeter * 0.01;
    return meter;
}
const totalMeter = centimeterToMeter(100);
console.log('Meter is = ', totalMeter);


// page requirements

function pageRequirements(bookQuantity1, bookQuantity2, bookQuantity3) {
    const book1Pages = bookQuantity1 * 100;
    const book2Pages = bookQuantity2 * 200;
    const book3Pages = bookQuantity3 * 300;
    const totalPage = book1Pages + book2Pages + book3Pages;
    return totalPage;

}
const totalPages = pageRequirements(3, 5, 7);
console.log('Total Pages', totalPages);

// friend

function bestFriend(friends) {
    let maxLength = friends[0].length;
    let bigName = friends[0];
    for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.length >= maxLength) {
            maxLength = friend.length;
            bigName = friend;
        }

    }
    return bigName;
}
const friends = ["Nilima Akter Limu", "Sheikh Farid", "Mahbub Hosen", "Udhas", "Faisal alam"];

const friendName = bestFriend(friends);
console.log(friendName);



function onlyPositive(numbers) {
    let positiveNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number >= 0) {
            positiveNumber.push(number);
        }
        else {
            break;
        }
    }
    return positiveNumber;

}

const numbers = [10, 24, -36, 25, -41];
const positiveNumber = onlyPositive(numbers);
console.log(positiveNumber);