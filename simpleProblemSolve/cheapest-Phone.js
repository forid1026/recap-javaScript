const phones = [
    { name: 'samsung', price: 30000, camera: '10MP', storage: '1TB' },
    { name: 'sonny', price: 35000, camera: '10MP', storage: '1TB' },
    { name: 'nokia', price: 20000, camera: '10MP', storage: '1TB' },
    { name: 'htc', price: 32000, camera: '10MP', storage: '1TB' },
    { name: 'apple', price: 41000, camera: '10MP', storage: '1TB' },
    { name: 'redmi', price: 25000, camera: '10MP', storage: '1TB' }

];

// let cheapest = phones[0];
// for (const phone of phones) {
//     if (phone.price < cheapest.price) {
//         cheapest = phone;
//         console.log('Cheapest Phone is ', cheapest.name);
//     }

// }
// console.log(cheapest.name);


function comparePhonePrice(phones) {
    let cheapest = phones[0];
    for (const phone of phones) {
        if (phone.price < cheapest.price) {
            cheapest = phone;
            return cheapest;
        }

    }
}
const cheapestPhone = comparePhonePrice(phones);
console.log(cheapestPhone);