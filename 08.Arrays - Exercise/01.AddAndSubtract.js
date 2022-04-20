function numbersPrint(arr) {
    let sum=0;
    let sum2=0;
    let arr2=[];
    for (let i = 0; i <= arr.length - 1; i++) {
        let curr=Number(arr[i]);
        sum+=curr;
        if(curr%2==0){
            curr+=i;
        }
        else{
            curr-=i;
        }
        sum2+=curr;
        arr2.push(curr);
    }
    console.log(arr2);
    console.log(sum);
    console.log(sum2);
}