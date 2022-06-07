var num = 20;
if(num >= 80){
    console.log('You Got A+');
}
else if(num < 80 && num > 70){
    console.log('You got A');
}
else if(num <= 70 && num > 60){
    console.log('You got A-');
}
else if(num < 60 && num > 50){
    console.log('You got B');
}
else if(num < 50 && num > 40){
    console.log('You got B-');
}
else if(num < 40 && num >= 33){
    console.log('You got C');
}
else{
    console.log('Failed! Better luck next time!');
}



