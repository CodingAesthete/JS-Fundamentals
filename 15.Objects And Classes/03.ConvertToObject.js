function numbersPrint(obje) {
    let obj=JSON.parse(obje);
    let keys=Object.keys(obj);
    let values= Object.values(obj);
    for(let i=0; i<keys.length; i++){
        console.log(`${keys[i]}: ${values[i]}`);
    }
}