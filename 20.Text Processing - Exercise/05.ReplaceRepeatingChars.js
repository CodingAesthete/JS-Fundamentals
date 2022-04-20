function numbersCheck(input) {
    let res="";
    for(let i=0; i<input.length; i++){
        if(input[i]!=input[i-1]){
            res+=input[i];
        }
    }
    console.log(res)
  }