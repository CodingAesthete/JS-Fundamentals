function numbersPrint(part,age) {
    if(age>=0 && age<=18){
        if(part=="Weekday"){
            console.log(`12$`);
        }
        else if(part=="Weekend"){
            console.log(`15$`);
        }
        else if(part=="Holiday"){
            console.log(`5$`);
        }
    }
    else if(age>18 && age<=64){
        if(part=="Weekday"){
            console.log(`18$`);
        }
        else if(part=="Weekend"){
            console.log(`20$`);
        }
        else if(part=="Holiday"){
            console.log(`12$`);
        }
    }
    else if(age>64 && age<=122){
        if(part=="Weekday"){
            console.log(`12$`);
        }
        else if(part=="Weekend"){
            console.log(`15$`);
        }
        else if(part=="Holiday"){
            console.log(`10$`);
        }
    }
    else{
        console.log("Error!");
    }
}