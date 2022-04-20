function numbersPrint(arr) { 
    let num=Number.MIN_SAFE_INTEGER;
    let newArr=[];
    for(let i=0; i<arr.length;i++){
        if(Number(arr[i])>=Number(num)){

            newArr.push(arr[i]);
            num=arr[i];
        }
    }
    console.log(newArr.join(" "));
}