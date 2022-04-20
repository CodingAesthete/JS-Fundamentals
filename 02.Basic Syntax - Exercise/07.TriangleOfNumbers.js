function numbersPrint(num) {
    for(i=1;i<=num;i++){
        let cus=0;
        let res="";
        while(cus!=i){
            res+=i +" "
            cus++;
        }
        console.log(res);
    }
} 