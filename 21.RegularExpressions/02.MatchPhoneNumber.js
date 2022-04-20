function numbersCheck(input){
    let regex=/\+359([ -])2\1\d{3}\1\d{4}\b/g
    let matches=[];
    while(( valid=regex.exec(input))!=null){
        matches.push(valid[0])
    }
    console.log(matches.join(", "))
}