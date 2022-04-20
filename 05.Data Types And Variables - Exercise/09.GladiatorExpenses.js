function numbersPrint(lostFights, helmetP, swordP, shieldP, armorP) {
    let sum = 0;
    let counter=0;
    for (let i = 1; i <= Number(lostFights); i++) {
        let check1=false;
        let check2=false;
        if (i % 2 == 0) {
            sum+=Number(helmetP);
            check1=true;
        }
        if(i%3==0){
            sum+=Number(swordP);
            check2=true;
        }
        if(check1==true && check2==true){
            sum+=Number(shieldP);
            counter++;
            if(counter%2==0 && counter!=0){
                sum+=Number(armorP);
            }
        }
    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}