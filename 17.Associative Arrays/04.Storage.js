function numbersCheck(arr){
    let map = new Map();
    for (const el of arr) {
        let [product,count]=  el.split(" ")
        if(map.has(product)){
            map.set(product, map.get(product)+Number(count))
        }
        else{
            map.set(product,Number(count));
        }
    }
    for (const el of map) {
        console.log(`${el[0]} -> ${el[1]}`);
    }
}