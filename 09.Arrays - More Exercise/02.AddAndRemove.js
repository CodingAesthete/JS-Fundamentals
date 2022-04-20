function numbersPrint(arr) { 
    let newArr=[];
    for(let i=1; i<=arr.length;i++){
        if(arr[i-1]=='add'){
            newArr.push(Number(i));
        }
        else{
            newArr.pop();
        }
    }
    if(newArr.length==0){
        console.log("Empty");
        return;
    }
    console.log(newArr.join(" "));
}