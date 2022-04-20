function numbersPrint(arr) {
    return Number(arr[0])+getReversed(arr);
    function getReversed(arr){
        arr.reverse();
        return Number(arr[0]);
    }
}