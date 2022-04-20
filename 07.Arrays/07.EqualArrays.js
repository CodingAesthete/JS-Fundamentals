function numbersPrint(arr1,arr2) {
    for(let i=0; i<=arr1.length-1;i++){
        arr1[i]=Number(arr1[i]);
    }
    for(let i=0; i<=arr2.length-1;i++){
        arr2[i]=Number(arr2[i]);
    }
    let sum=0;
    for(let i=0; i<=arr1.length-1;i++){
        sum+=Number(arr1[i]);
        if(arr1[i]!=arr2[i]){
            console.log
            (`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
}