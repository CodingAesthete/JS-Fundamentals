function numbersPrint(number) {
    let sum=0;
    for(let i=1; i<=number;i++){
        if(number%i==0){
            sum+=i;
        }
    }
    
    if(Number(sum/2)!=Number(number)){
        console.log(`It's not so perfect.`);
        return;
    }
    console.log("We have a perfect number!");
}