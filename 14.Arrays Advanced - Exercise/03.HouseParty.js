function numbersPrint(input) {
    let arr=[];
    for(let i=0; i<input.length; i++){
        let curr=input[i].split(" ");
        if(curr.length==3){
            if(!arr.includes(curr[0])){
                arr.push(curr[0]);
            }
            else{
                console.log(`${curr[0]} is already in the list!`);
            }
        }
        else{
            if(arr.includes(curr[0])){
                let index=arr.indexOf(curr[0]);
                arr.splice(index,1);
            }
            else{
                console.log(`${curr[0]} is not in the list!`);
            }
        }
    }
    console.log(arr.join("\r\n"))
}