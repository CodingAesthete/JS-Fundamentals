function numbersCheck(arr){
    let words={};
    for (const word of arr) {
        let keeys= Object.keys(words);
        if(keeys.includes(word)){
            words[word]++;
        }
        else{
            words[word]=1;
        }
    }
    const sortable = Object.entries(words)
    .sort(([,a],[,b]) => b-a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    for (const key in sortable) {
        console.log(`${key} -> ${sortable[key]} times`)
    }
}