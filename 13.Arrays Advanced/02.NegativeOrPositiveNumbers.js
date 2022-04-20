function numbersPrint(arr) {
    let arr2=[];
    for(let i=0; i<=arr.length-1; i++){
        let curr=Number(arr[i]);
        let curr2=curr>=0?arr2.push(curr):arr2.unshift(curr);
    }
    return arr2.join("\r\n")
}