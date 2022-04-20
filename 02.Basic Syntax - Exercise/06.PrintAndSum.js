function numbersPrint(fnum,snum) {
    let result="";
    let sum=0;
    for(let i=fnum; i<=snum;i++){
        result+=i+ " ";
        sum+=i;
    }
    console.log(result)
    console.log(`Sum: ${sum}`);
} 