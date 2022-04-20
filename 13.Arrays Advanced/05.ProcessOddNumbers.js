function numbersPrint(arr) {
    let arr2=[];
    for(let i=1; i<arr.length; i+=2){
        arr2.push(arr[i]);
    }
    for(let i=0; i<arr2.length;i++){
        arr2[i]*=2;
    }
    console.log(arr2.reverse().join(" "))
}