function numbersCheck(input){
    let res="";
    for (let i=0; i<input.length; i++) {
        if(input[i]==input[i].toUpperCase())
        {
        res+=", "+input[i]
    }
        else{
            res+=input[i]
        }
    }
    console.log(res.slice(2))
}