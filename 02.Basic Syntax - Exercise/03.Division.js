function numbersPrint(number) {
    if(Number(number)%10==0){
        console.log(`The number is divisible by 10`);
    }
    else if(Number(number)%7==0){
        console.log(`The number is divisible by 7`);
    }
    else if(Number(number)%6==0){
        console.log(`The number is divisible by 6`);
    }
    else if(Number(number)%3==0){
        console.log(`The number is divisible by 3`);
    }
    else if(Number(number)%2==0){
        console.log(`The number is divisible by 2`);
    }
    else{
        console.log('Not divisible');
    }
}