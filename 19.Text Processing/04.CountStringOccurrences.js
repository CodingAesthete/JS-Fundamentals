function numbersCheck(input,word) {
    let counter=0;
    let words= input.split(" ")
    for (const worde of words) {
        if(worde==word){
            counter++;
        }
    }
    console.log(counter)
}