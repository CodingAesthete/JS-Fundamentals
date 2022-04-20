function numbersPrint(num, arr) {
    let newArr = [];
    for (let i = 0; i < num; i++) {
        newArr.push(arr[i]);
    }
    newArr.reverse();
    let res = "";
    for (let n = 0; n < num; n++) {
        res += `${newArr[n]} `;
    }
    console.log(res);
}