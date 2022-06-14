var computer  = {
    brand: 'Dell',
    processor: "intel",
    core: "i5",
    storage: "512gb",
    color: "silver",
    price: 70000
}

// console.log(computer);


// set value in object
computer.storage  = "1TB";
computer['core']  = "i9";
var computerProperty = "price";
computer[computerProperty] = 75000;

console.log(computer);
