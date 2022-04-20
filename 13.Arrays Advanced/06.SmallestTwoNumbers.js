function numbersPrint(arr) {
    while (arr.length > 2) {
        let maxEl = Math.max(...arr);
        let index = arr.indexOf(maxEl);
        arr.splice(index, 1);
    }
    let newArr = arr.sort(function (a, b) {
        return a - b;
    })
        .join(" ")
    console.log(newArr);
}