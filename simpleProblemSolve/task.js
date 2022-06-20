const friends = ["Nilima Akter Limu", "Sheikh Farid", "Mahbub Hosen", "Udhas", "Faisal alam"];
// let max = friends[0].length;
// let bigName = friends[0];
// for (let i = 0; i < friends.length; i++) {
//     const friend = friends[i];
//     if (friend.length >= max) {
//         max = friend.length;
//         bigName = friend;
//     }

// }
// console.log(bigName);

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

const friendName = bestFriend(friends);
console.log(friendName);