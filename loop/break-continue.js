// var num = 20;
// var i = 0;
// while( i <= 20){
//     console.log(i);
//     i++;
// }

// for (var i = 0; i <= 20; i++) {
//     if (i > 15)
//         break;
//     console.log(i);
// }

var num = [12, 23, 45, 85, 65, 35, 74, 100, 95];
for (let i = 0; i < num.length; i++) {
    const number = num[i];
    if(number > 90){
        continue; //skip this iteration
    }
    console.log(number);
}


var phone = ['ipphone', 'samsung', 'redmi', 'nokia', 'realme'];
if(phone.indexOf('sony') == -1){
    console.log("oops! this phone is missing!");
}


//search any element in array
if(phone.indexOf('samsung') != -1){
    console.log("yes, this phone is available now");
}