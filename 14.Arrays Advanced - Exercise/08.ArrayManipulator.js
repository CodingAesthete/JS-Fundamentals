function numbersPrint(arr, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        let curr = arr2[i].split(" ");
        if (curr[0] == "print") {
            console.log(`[ ${arr.join(", ")} ]`)
        }
        else if (curr[0] == "add") {
            let index = Number(curr[1]);
            let el = Number(curr[2]);
            arr.splice(index, 0, el);
        }
        else if (curr[0] == "contains") {
            let index = arr.indexOf(Number(curr[1]));
            console.log(index);
        }
        else if (curr[0] == "remove") {
            arr.splice(Number(curr[1]), 1)
        }
        
        else if(curr[0]=="sumPairs"){
            let arro=[];
            for(let i=0; i<arr.length;i+=2){
                if(i+1>arr.length-1){
                    let curr=Number(arr[i]);
                arro.push(curr);
                }else{
                    let curr=Number(arr[i])+Number(arr[i+1]);
                    arro.push(curr);
                }
            }
            arr=arro;
        }
        else if(curr[0]=="shift"){
            let positions=Number(curr[1]);
            for (let i = 0; i < positions; i++) {
                let firstEl = arr.shift();
                arr.push(firstEl);
            }
        }
        else if (curr[0] === "addMany") {
            let index = curr[1];
            let newArray = curr.slice(2).map(Number);
            arr.splice(index, 0, ...newArray);
          }
    }
}