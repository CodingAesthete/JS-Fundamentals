function numbersPrint(arr) {
    let num=arr.shift();
    let arr2=arr.slice(0,num);
    console.log(arr2.join(" "));
    let arr3=arr.slice(-num);
    console.log(arr3.join(" "));
}