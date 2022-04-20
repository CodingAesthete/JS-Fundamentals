function numbersPrint(num) {
    let input="ATCGTTAGGG";
    let e=0;
    let arr=[];
    for(let i=1; i<=Math.ceil(num/4); i++){
        arr.push(`**${input[e]}${input[e+1]}**`);
        e+=2;
        if(e>input.length-1){
            e=0;
        }
        arr.push(`*${input[e]}--${input[e+1]}*`);
        e+=2;
        if(e>input.length-1){
            e=0;
        }
        arr.push(`${input[e]}----${input[e+1]}`);
        e+=2;
        if(e>input.length-1){
            e=0;
        }
        arr.push(`*${input[e]}--${input[e+1]}*`);
        e+=2;
        if(e>input.length-1){
            e=0;
        }
    }
    while(Number(arr.length)!=Number(num)){
        arr.pop()
    }
    console.log(arr.join("\r\n"))
}