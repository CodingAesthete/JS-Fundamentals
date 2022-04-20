function numbersPrint(arr1,arr2) {
    let arr=[];
    for(let i=0; i<=arr1.length-1; i++){
        if(i%2==0){
            arr.push(Number(arr1[i])+Number(arr2[i]));
        }
        else{
            arr.push(arr1[i]+arr2[i]);
        }
    }
    console.log(arr.join(" - "));
}