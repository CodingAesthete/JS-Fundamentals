function numbersPrint(arr) {
    for(let i=0; i<=arr.length/2; i++){
        let first=arr[i];
        let second=arr[arr.length-1-i];
        arr[i]=second;
        arr[arr.length-1-i]=first;
    }
    if(arr.length%2==0){
    let third=arr[arr.length/2];
    let fourth=arr[arr.length/2-1];
    arr[arr.length/2]=fourth;
    arr[arr.length/2-1]=third;
    }
    console.log(arr.join(" "))
}