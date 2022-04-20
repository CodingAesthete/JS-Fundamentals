function numbersPrint(people, type,day) {
    let totalPrice=0;
    if(type=="Students"){
        if(day=="Friday"){
            totalPrice=people*8.45;
        }
        else if(day=="Saturday"){
            totalPrice=people*9.80;
        }
        else if(day=="Sunday"){
            totalPrice=people*10.46;
        }
        if(people>=30){
            totalPrice=0.85*totalPrice;
        }
    }
    else if(type=="Business"){
        if (people>=100){
            people-=10;
        }
        if(day=="Friday"){
            totalPrice=people*10.90;
        }
        else if(day=="Saturday"){
            totalPrice=people*15.60;
        }
        else if(day=="Sunday"){
            totalPrice=people*16;
        }
    }
    else if(type=="Regular"){
        if(day=="Friday"){
            totalPrice=people*15;
        }
        else if(day=="Saturday"){
            totalPrice=people*20;
        }
        else if(day=="Sunday"){
            totalPrice=people*22.50;
        }
        if(people>=10 && people<=20){
            totalPrice=0.95*totalPrice;
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}