function numbersPrint(char1,char2) {
    let first=char1.charCodeAt();
    let second=char2.charCodeAt();
    let firo=Math.max(first,second);
    let siro=Math.min(first,second);
    let arr=[];
    for(let i=siro+1; i<firo;i++){
        let char=String.fromCharCode(i);
        arr.push(char);
    }
    console.log(arr.join(" "));
}