function numbersPrint(num1,num2) {
    let fac1=1;
    for(let i=num1;i>=1;i--){
        fac1*=Number(i);
    }
    let fac2=1;
    for(let i=num2;i>=1;i--){
        fac2*=Number(i);
    }
    let div=fac1/fac2;
    console.log(div.toFixed(2));
}