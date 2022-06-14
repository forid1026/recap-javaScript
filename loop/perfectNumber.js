var num = 121, rem, i;
var sum = 0;

for(i = 1; i <= (num-1); i++){
    rem = num % i;
    console.log(rem)
    if( rem == 0){
        sum += i;   
        console.log(sum);     
    }
 }
 if( sum == num)
     console.log("perfect number ");
 else
    console.log("Not a perfect")


