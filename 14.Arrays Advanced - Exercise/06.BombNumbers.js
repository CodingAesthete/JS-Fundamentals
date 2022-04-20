function numbersPrint(arr, arr2) {
    let el = Number(arr2[0]);
    let nums = arr2[1];
    while (arr.includes(el)) {
        for (let i = 0; i < arr.length; i++) {
            let curr = arr[i];
            if (curr == el) {
                arr.splice((i + 1), nums);
                arr.splice((i - nums<0?0:i-nums), nums + 1);
                break;
            }
        }
    }
    
    let sum = 0;
    for (const num of arr) {
        sum += Number(num);
    }
    console.log(sum);
}