function numbersPrint(arr, arr2) {
    let elements=arr2[0];
    let deleted=arr2[1];
    let searched=arr2[2];
    let ars=arr.splice(0,elements);
    ars.splice(0,deleted);
    let times=0;
    for (const el of ars) {
        if(el==searched){
            times++;
        }
    }
    console.log(`Number ${searched} occurs ${times} times.`)
}