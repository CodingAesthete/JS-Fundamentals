function numbersPrint(arr) { 
    let num=arr.pop();
    for(let i=0; i<num;i++){
        let curr=arr.pop();
        arr.unshift(curr)
    }
    console.log(arr.join(" "));
}