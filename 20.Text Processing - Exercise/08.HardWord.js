function numbersCheck(arr1){
    let wordas=arr1[1]
    let words=arr1[0].split(" ")
    for (const word of wordas) {
        for(let i=0; i<words.length; i++){
            let curr=words[i];
            let last=curr[curr.length-1].charCodeAt()
            let as=curr.length
            let ad=""
            if(last<65 || last>122){
                ad=curr[curr.length-1]
                as=curr.length-1
                
            }
            if(curr[0]=="_" && word.length==as){

                words[i]=word+ad;
                break;
            }
        }
    }
    console.log(words.join(" "))
}