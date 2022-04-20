function numbersCheck(input){
    let text=input;
    let regex=/\b([A-Z][a-z]+ [A-Z][a-z]+)\b/g
    let array=[];
    while((valid=regex.exec(input))!=null){
        array.push(valid[1])
    }
    console.log(array.join(" "))
}