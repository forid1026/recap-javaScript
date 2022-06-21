function seerToMon(seer) {
    if (seer < 0) {
        return "Please input positive number";
    }
    else {
        const mon = seer / 40;
        return mon;
    }
}
const totalMon = seerToMon(80);
console.log(totalMon);

// total sales
function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    if (shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0) {
        return "please input positive number of product";
    }
    else {
        shirtPrice = shirtQuantity * 100;
        pantPrice = pantQuantity * 200;
        shoePrice = shoeQuantity * 500;
        totalPrice = shirtPrice + pantPrice + shoePrice;
        return totalPrice;
    }

}

const totalAmount = totalSales(-1, 5, 5);
console.log(totalAmount);


// delivery cost
function deliveryCost(tShirt) {
    if (tShirt < 0) {
        return "Please input positive number";
    }
    else if (tShirt <= 100) {
        const first100DeliveryCost = tShirt * 100;
        return first100DeliveryCost;

    }
    else if (tShirt <= 200) {
        const first100DeliveryCost = 100 * 100;
        const restTShirt = tShirt - 100;
        const second100DeliveryCost = restTShirt * 80;
        const totalSecondDeliveryCost = first100DeliveryCost + second100DeliveryCost;
        return totalSecondDeliveryCost;
    }
    else {
        const first100DeliveryCost = 100 * 100;
        const second100DeliveryCost = 100 * 80;
        const restTShirt = tShirt - 200;
        const restDeliveryCost = restTShirt * 50;
        const restTotalDeliveryCost = first100DeliveryCost + second100DeliveryCost + restDeliveryCost;
        return restTotalDeliveryCost;
    }

}
const totalDeliverCost = deliveryCost(150);
console.log(totalDeliverCost);


// perfect friend
function perfectFriend(friends) {
    let perfect = friends[0];
    for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.length === 5) {
            perfect = friend;
            break;
        }
    }
    return perfect;
}
const friends = ["Farida", "Nilima", "Udhas", "Mahbub"];
const friendName = perfectFriend(friends);
console.log(friendName);