function numbersCheck(arr){
    let phoneBook={};
    for (const el of arr) {
        let [name, number]=el.split(" ")
        phoneBook[name]=number;
    }
    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`)
    }
}