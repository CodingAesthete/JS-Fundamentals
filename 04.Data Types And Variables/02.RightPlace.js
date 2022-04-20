function numbersPrint(word, letter, fullWord) {
    wordo=String(word).replace('_',letter);
    if(String(wordo)===String(fullWord)){
        console.log(`Matched`);
    }
    else{
        console.log('Not Matched');
    }
}