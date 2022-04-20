function numbersPrint(num1, num2, num3) {
    let counter=0;
    if(num1<0){
        counter++;
    }
    if(num2<0){
        counter++;
    }
    if(num3<0){
        counter++;
    }
    if(counter%2==1){
        console.log("Negative");
    }
    else{
        console.log("Positive");
    }
}