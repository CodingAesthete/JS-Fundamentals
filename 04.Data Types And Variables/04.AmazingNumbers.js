function numbersPrint(num) {
    let word=String(num).split("");
    let sum=0;
    for(let i=0; i<word.length; i++){
        sum+=Number(word[i]);
    }
    if(sum.toString().includes('9')){
        console.log(`${num} Amazing? True`);
    }
    else{
        console.log(`${num} Amazing? False`);
    }
}