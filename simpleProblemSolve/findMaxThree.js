function findMax(number1, number2, number3){
   // Variable declaration

 
// Largest among n1, n2 and n3
// let max = (number1 > number2) ?
//       (number1 > number3 ? number1 : number3) :
//       (number2 > number3 ? number2 : number3);

    if(number1 > number2){
        if(number1 > number3){
            return number1;
        }
        else
            return number3;
    }
    else if(number2 > number3){
        return number2;
    }
    else
        return number3;


    //   return max;

}

const maxNumber = findMax(12,14,29);
console.log(maxNumber);