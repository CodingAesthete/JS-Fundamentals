function numbersPrint(arr,num) { 
    for(let i=0; i<=arr.length-2;i++){
        let sum=0;
        for(let e=i+1; e<=arr.length-1;e++){
            sum+=arr[i]+arr[e];
            if(sum==num){
                console.log(`${arr[i]} ${arr[e]}`);
            }
            sum=0;
        }
    }
}