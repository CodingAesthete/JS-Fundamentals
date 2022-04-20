function numbersCheck(arr){
    let people={};
    for (const el of arr) {
        let [name,address]=el.split(":");
        people[name]=address
    }
    let keyas=Object.keys(people).sort().reduce((a, c) => (a[c] = people[c], a), {})
    for (const key in keyas) {
        console.log(`${key} -> ${keyas[key]}`);
    }
}