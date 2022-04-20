function numbersPrint(input) {
    let arr=[];
    while(input.length>0){
        let el=Math.max(...input);
        let index=input.indexOf(el);
        input.splice(index,1);
        arr.push(el);
        if(input.length==0){
            break;
        }
        let el2=Math.min(...input);
        let index2=input.indexOf(el2);
        input.splice(index2,1);
        arr.push(el2);
    }
    console.log(arr.join(" "))
}