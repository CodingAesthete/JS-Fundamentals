function numbersPrint(num) {
    if(num==2 || num==3 || num==7 || num==11 || num==13){
        console.log('true');
        return;

    }
    if(num%2==0){
        console.log('false');
        return;
    }
    if(num%3==0){
        console.log('false');
        return;
    }
    if(num%5==0){
        console.log('false');
        return;
    }
    if(num%7==0){
        console.log('false');
        return;
    }
    if(num%11==0){
        console.log('false');
        return;
    }
    if(num%13==0){
        console.log('false');
        return;
    }
    console.log('true')
}