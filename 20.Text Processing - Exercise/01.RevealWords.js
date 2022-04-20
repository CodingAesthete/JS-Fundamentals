function numbersCheck(input,sentence) {
    let words=input.split(", ")
    let arr=sentence.split(" ")
    for (const word of words) {
        for(let i=0; i<arr.length; i++){
            let curr=arr[i];
            if(curr[0]=="*" && arr[i].length==word.length){

                arr[i]=word;
                break;
            }
        }
    }
    console.log(arr.join(" "))
}