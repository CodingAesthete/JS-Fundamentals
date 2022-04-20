function numbersPrint(arr) { 
    let counter=1;
    let res=Number.MIN_SAFE_INTEGER;
    let countero=1;
    for(let i=1; i<=arr.length-1; i++){
        if(arr[i]==arr[i-1]){
            countero+=1;
            if(countero>counter){
                counter=countero;
                res=arr[i];
            }
        }
        else{
            countero=1;
        }
    }
    let result="";
    for(let i=0; i<counter; i++){
        result+=res+" ";
    }
    console.log(result);
}