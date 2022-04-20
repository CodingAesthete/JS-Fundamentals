function numbersPrint(arr, number) {
    for(let i=1; i<=Number(number)%arr.length; i++){
        let curr = arr.shift();
        arr.push(curr);
    }
    console.log(arr.join(" "));
}