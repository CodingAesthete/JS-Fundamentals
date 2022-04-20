function numbersPrint(arr) { 
    let step=Number(arr.pop());
    let newArr=[];
    for(let i=0; i<=arr.length-1;i+=step){
        newArr.push(arr[i]);
    }
    console.log(newArr.join(" "));
}