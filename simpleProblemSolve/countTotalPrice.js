const products = [

    { name: 'shirt', price: 1000 , quantity: 10},
    { name: 'pant', price: 800 , quantity: 5},
    { name: 'sharee', price: 2500 , quantity: 3},
    { name: 'mobile', price: 10000 , quantity: 2},
];

// 10000+4000+7500+20000
//manual process
// let totalPrice = 0;
// for (const product of products) {
//     console.log(product)
//     totalPrice += product.price;
// }
// console.log(totalPrice);


//using function
function totalPriceCount(products) {
    let cartTotal = 0;
    for (const product of products) {
        // console.log(product)
        productTotal = product.price * product.quantity;
        cartTotal += productTotal;
    }
    return cartTotal;
}
const totalCartPrice = totalPriceCount(products);
console.log('Total cart Price: ', totalCartPrice);