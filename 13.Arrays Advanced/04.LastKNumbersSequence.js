function numbersPrint(length,numbers) {
    let arr=[];
    arr.push(1);
    for(let i=1; i<length;i++){
        let arr2=arr.slice(-numbers);
        let num=0;
        for(let n=0; n<arr2.length;n++){
            num+=arr2[n];
        }
        arr.push(num);
    }
    console.log(arr.join(" "))
}