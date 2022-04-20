function numbersPrint(number) {
    let num=Number(number);
    for(let i=1; i<=num; i++){
        let word=i.toString().split("");
        let sum=0;
        for(let n=0; n<word.length; n++){
            sum+=Number(word[n]);
        }
        if(sum==5 || sum==7 || sum==11){
            console.log(`${i} -> True`);
        }
        else{
            console.log(`${i} -> False`);
        }
    }
}