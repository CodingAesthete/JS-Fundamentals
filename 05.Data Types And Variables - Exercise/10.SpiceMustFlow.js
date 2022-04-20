function numbersPrint(num) {
    let sum=0;
    let days=0;
    let num2=num;
    while(Number(num2>=100)){
        days++;
        sum+=num2;
        sum-=26;
        num2-=10;
    }
    sum-=26;
    if(sum<=0){
        sum=0;
    }
    console.log(days);
    console.log(sum);
}