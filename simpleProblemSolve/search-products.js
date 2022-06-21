const products = [

    {name:'samsung A51 phone', price: 51000, ram: '8gb'},
    {name:'redmi pocox3 phone', price: 51000, ram: '8gb'},
    {name:'HTC A51 phone', price: 30000, ram: '8gb'},
    {name:'realme c1 phone', price: 11000, ram: '8gb'},
    {name:'oneplus 9T phone', price: 57000, ram: '8gb'},
    {name:'samsung A21 phone', price: 21000, ram: '8gb'},
    {name:'samsung m2', price: 21000, ram: '8gb'},

];
function searchProducts(products, searchText){
    // console.log(products, searchText);
    const matchedProduct = [];
    for (const product of products) {
        const productName = product.name;
        if(productName.indexOf(searchText) != -1){
            matchedProduct.push(product);
            // matchedProduct.push(productName); // product name
            // console.log(productName);
        }
        
    }
    return matchedProduct;
}

const matched = searchProducts(products, 'samsung');
console.log(matched);