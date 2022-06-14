function checkEvenOdd(number){
    if(number < 0){
        return "please enter positive number!!";
    }
    else if(number % 2 == 0){
        return "the number is even";
    }
    else{
        return "the number is odd";

    }
}

const result = checkEvenOdd(-1);
console.log(result)