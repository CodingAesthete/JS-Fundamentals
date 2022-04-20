function numbersPrint(arr) { 
    let result='no';
    for(let i=0; i<=arr.length-1; i++){
        let leftsum=0;
        let rightsum=0;
        for(let j=0; j<i; j++){
            leftsum+=arr[j];
        }
        for(let k=arr.length-1; k>i; k--){
            rightsum+=arr[k];
        }
        if(leftsum==rightsum){
            result=i;
        }
    }
    console.log(result);
}