function numbersPrint(arr) {
    while(arr.length>1){
        for(let i=0; i<arr.length-1;i++){
            arr[i]=arr[i]+arr[i+1];
        }
        arr.length=arr.length-1;
    }
    console.log(arr[0]);
}