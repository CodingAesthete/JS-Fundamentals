function numbersPrint(arr) {
    let arr2= [];
    for(let i=0; i<=arr.length-1; i++){
        if(i==arr.length-1){
            arr2.push(arr[arr.length-1]);
            break;
        }
        let check=true;
        for(let e=i+1; e<=arr.length-1;e++){
            if(arr[i]<=arr[e]){
                check=false;
                break;
            }
        }
        if(check){
        arr2.push(arr[i])}
    }
    console.log(arr2.join(" "))
}