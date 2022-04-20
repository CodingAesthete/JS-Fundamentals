function numbersPrint(num) {
    let sum=0;
    let numa=num.toString();
    for(let i=0; i<numa.length;i++){
        sum+=Number(numa[i]);
    }
    let avg=sum/numa.length;
    while(avg<5){
        sum=0;
        numa+="9";
        for(let i=0; i<numa.length;i++){
            sum+=Number(numa[i]);
        }
        let avg=sum/numa.length;
        if(avg>5){
        break;
        }
    }
    console.log(numa);
}