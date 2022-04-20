function numbersPrint(input) {
    let preArr=input.shift();;
    let arr=preArr.split(" ");
    let arro=input;
    for(let i=0; i<arro.length; i++){
        let curr=arro[i].split(" ");
        let command=curr[0];
        if(command=="Add"){
            arr.push(curr[1]);
        }
        else if(command=="Remove"){
            arr=arr.filter(num=>Number(num)!=Number(curr[1]))
        }
        else if(command=="RemoveAt"){
            arr.splice(Number(curr[1]),1);
        }
        else if(command=="Insert"){
            arr.splice(Number(curr[2]),0,Number(curr[1]))
        }
    }
    console.log(arr.join(" "))
}