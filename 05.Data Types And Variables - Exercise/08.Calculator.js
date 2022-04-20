function numbersPrint(num1,sign,num2) {
    if(sign=="+"){
        console.log(Number(num1+num2).toFixed(2));
    }
    else if(sign=="-"){
        console.log(Number(num1-num2).toFixed(2));
    }
    else if(sign=="*"){
        console.log(Number(num1*num2).toFixed(2));
    }
    else if(sign=="/"){
        console.log(Number(num1/num2).toFixed(2));
    }
}