function isLeafYear(number){
    if(number % 4 == 0){
        return "Leaf year";
    }
    else if(number % 400 == 0 &&  number % 100 != 0){
        return "Leaf year";
    }
    else{
        return "Not a leaf year!";
    }
}
const leafYear = isLeafYear(2024);
console.log(leafYear);