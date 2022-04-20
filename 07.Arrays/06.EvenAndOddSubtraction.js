function numbersPrint(input) {
    let sum=0;
    let raz=0;
    for(let i=0; i<=input.length-1; i++){
        let num=Number(input[i]);
        if(num%2==0){
            sum+=num;
        }
        else{
            raz+=num;
        }
    }
    console.log(sum-raz);
}