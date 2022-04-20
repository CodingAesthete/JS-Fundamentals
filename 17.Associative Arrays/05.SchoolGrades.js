function numbersCheck(arr){
    let map= new Map();
    for (const line of arr) {
        let curr=line.split(" ")
        let name=curr.shift();
        if(map.has(name)){
            let arr=map.get(name)
            arr.push(...curr.map(Number))
        }
        else{
            map.set(name,curr.map(Number));
        }
    }
    let keyyes= map.keys();
    for (const keye of keyyes) {
        let arr=map.get(keye)
        let avg= (arr.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue
          }, 0)/arr.length).toFixed(2)
          map.set(keye,avg)
    }
    var maple = Array.from(map).sort();
    for (const e of maple) {
        console.log(`${e[0]}: ${e[1]}`);
    }
}