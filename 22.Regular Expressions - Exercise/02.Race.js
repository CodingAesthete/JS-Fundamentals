function numbersCheck(arr){
    let names=arr.shift().split(", ");
    let regex=/[A-Za-z]/g
    let regex2=/\d/g
    let curr= arr.shift()
    let object={};
    while(curr!='end of race'){
        let res=""
        while(valid=regex.exec(curr)){
        res+=valid[0]
        }
        if(names.includes(res)){
            let res2=0;
           while(valid=regex2.exec(curr)){
            res2+=Number(valid[0])
           }
           if(!object.hasOwnProperty(res)){
            object[res]=res2
           }
           else{
               object[res]+=res2
           }
        }
        curr=arr.shift()
    }
    var sorted = [];
for (var x in object) {
    sorted.push([x, object[x]]);
}
    let gals=sorted.sort(function(a, b) {
        return b[1] - a[1]})
        gals.length=3
        console.log(`1st place: ${gals[0][0]}`);
        console.log(`2nd place: ${gals[1][0]}`);
        console.log(`3rd place: ${gals[2][0]}`);
}