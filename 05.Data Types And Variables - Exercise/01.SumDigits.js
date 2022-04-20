function numbersPrint(number) {
    let word= String(number).split("");
    let sum=0;
    for(let i=0; i<word.length;i++){
        sum+=Number(word[i]);
    }
    console.log(sum);
}