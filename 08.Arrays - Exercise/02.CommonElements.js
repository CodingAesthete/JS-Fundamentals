function numbersPrint(arr1,arr2) {
    for(let i=0 ;i<=arr1.length-1;i++){
        for(let n=0; n<=arr2.length-1;n++){
            if(arr1[i]===arr2[n]){
                console.log(arr1[i]);
            }
        }
    }
}