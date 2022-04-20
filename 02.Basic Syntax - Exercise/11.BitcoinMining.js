function numbersPrint(input) {
    let sumDollar = 0;
    var max = input.length;
    let day=0;
    let check=false;
    for (let i = 0; i < max; i++) {
        let grams=Number(input[i]);
        if((i+1)%3==0){
            grams=0.7*grams;
        }
        sumDollar += grams * 67.51;
        if(sumDollar>=11949.16 && check==false){
            day=i+1;
            check=true;
        }
    }
    let bitcoins=Math.floor(sumDollar/11949.16);
    console.log(`Bought bitcoins: ${bitcoins}`);
    if(check==true){
        console.log(`Day of the first purchased bitcoin: ${day}`);
    }
    let left=sumDollar-(bitcoins*11949.16);
    console.log(`Left money: ${left.toFixed(2)} lv.`);
}