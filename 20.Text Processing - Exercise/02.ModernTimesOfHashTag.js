function numbersCheck(sentence) {
    let arr=sentence.split(" ")
    for (const el of arr) {
        if(el.includes("#") && el.length>1 && (!/#[^a-zA-Z]/.test(el))){
            console.log(el.slice(1))
        }
    }
}