function numbersPrint(num) {
    let even=0;
    let odd=0;
    let numa=num.toString();
    for(let i=0; i<numa.length;i++){
        if(numa[i]%2==1){
            odd+=Number(numa[i]);
        }
        else{
            even+=Number(numa[i]);
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}