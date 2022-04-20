function numbersCheck(input){
    let words=new Map();
    let arr=input.split(" ")
    for (let el of arr) {
        el=el.toLowerCase()
        if(words.has(el)){
            words.set(el,words.get(el)+1)
        }
        else{
            words.set(el,1)
        }  
    }
    let wordo=[];
    for (const key of words.keys()) {
        if(words.get(key)%2!=0){
        wordo.push(key);
    }
    
    }
    console.log(wordo.join(" "))
} 