function numbersCheck(arr){
    let words={};
    let searched=arr.shift().split(" ")
    for (const word of searched) {
        words[word]=0;
    }
    for (const el of arr) {
        if(searched.includes(el)){
            words[el]++
        }
    }
    const sortable = Object.entries(words)
    .sort(([,a],[,b]) => b-a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    for (const word in sortable) {
        console.log(`${word} - ${words[word]}`);
    }
} 