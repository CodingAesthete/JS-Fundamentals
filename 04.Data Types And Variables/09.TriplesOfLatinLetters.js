function numbersPrint(number) {
    let num=Number(number);
    for(let i=0; i<num; i++){
        for(let n=0; n<num; n++){
            let result="";
            for(let m=0; m<num; m++){
                result+=String.fromCharCode(97+i);
                result+=String.fromCharCode(97+n);
                result+=String.fromCharCode(97+m);
                if(result.length==3){
                console.log(result);
                result="";
                }
            }
            
        }
    }
}