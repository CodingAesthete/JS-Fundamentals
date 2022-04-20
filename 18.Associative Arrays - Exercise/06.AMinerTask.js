function numbersCheck(input) {
    let words={};
    for(let i=0; i<input.length; i+=2){
        let keyas= Object.keys(words);
        if(keyas.includes(input[i])){
        words[input[i]]+=Number(input[i+1]);
        }
        else{
            words[input[i]]=Number(input[i+1]);
        }
    }
    for (const word in words) {
        console.log(`${word} -> ${words[word]}`);
    }
}