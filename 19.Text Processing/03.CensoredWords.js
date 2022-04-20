function numbersCheck(input,word) {
while(input.includes(word)){
    let res="";
    for(let i=0; i<word.length;i++){
        res+="*"
    }
    input=input.replace(word,res)

    
}
console.log(input)
}