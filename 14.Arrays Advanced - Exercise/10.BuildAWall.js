function numbersPrint(input) {
    let arr=input.map(Number);
    let sum=0;
    let cubArr=[];
    while(arr.length!=0){
        let curr=0;
        for(let i=0; i<arr.length; i++){
            if(arr[i]!=30){
            arr[i]+=1;
            sum+=195;
            curr+=195;
            }
            if(arr[i]==30){
                arr.splice(i,1)
                i--;
            }
            
        }
        cubArr.push(curr);
    }
    console.log(cubArr.join(", "))
    console.log(`${sum*1900} pesos`)
}