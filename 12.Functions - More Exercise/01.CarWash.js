function numbersPrint(arr) {
    let amount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "soap") {
            amount += 10;
        }
        else if (arr[i] == "water") {
            amount += 0.2 * amount;
        }
        else if(arr[i]=="vacuum cleaner"){
            amount+=0.25*amount;
        }
        else if(arr[i]=="mud"){
            amount-=0.1*amount;
        }
    }
    console.log(`The car is ${amount.toFixed(2)}% clean.`);
}