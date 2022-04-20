function numbersPrint(input) {
    let arr=input.shift().split(" ");
    let maxNum=Number(input.shift());
    for(let i=0; i<input.length; i++){
        let curr=input[i].split(" ")
        if(curr.length==2){
            arr.push(curr[1])
        }
        else{
            for(let n=0; n<arr.length; n++){
                if(Number(arr[n])+Number(curr)<=maxNum){
                    arr[n]=Number(arr[n])+Number(curr);
                    break;
                }
            }
        }
    }
    console.log(arr.join(" "))
}