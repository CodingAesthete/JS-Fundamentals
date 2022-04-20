function numbersCheck(input) {
    let cars=[];
    for (const el of input) {
        let curr=el.split(", ")
        if(curr[0]=="IN"){
            if(!cars.includes(curr[1])){
            cars.push(curr[1])
            }
        }
        else{
            if(cars.includes(curr[1])){
                const index = cars.findIndex(x => x == curr[1]);
                cars.splice(index,1)
            }
        }
    }
    console.log(cars.sort().join("\r\n"))
}