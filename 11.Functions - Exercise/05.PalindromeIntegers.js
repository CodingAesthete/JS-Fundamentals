function numbersPrint(arr) {
    for (let i=0; i<arr.length;i++ ){
        let num=String(arr[i]);
        let check=true;
        for(let n=0; n<num.length/2;n++){
            if(num[n]!=num[num.length-1-n]){
                check=false;
                break;
            }
        }
        console.log(check);
    }
}