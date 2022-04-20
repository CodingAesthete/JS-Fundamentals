function numbersCheck(word,sentence) {
    let wordL=word.toLowerCase();
    for (const el of sentence.split(" ")) {
        if(el.toLowerCase()==wordL){
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`)
}