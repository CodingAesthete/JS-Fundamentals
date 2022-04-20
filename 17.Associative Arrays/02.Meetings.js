function numbersCheck(arr){
    let shedules={};
    for (const el of arr) {
        let [day, name]=el.split(" ")
        let klyuches=Object.keys(shedules)
        if(klyuches.includes(day)) {
            console.log(`Conflict on ${day}!`)
        }
        else{
            shedules[day]=name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (const key in shedules) {
        console.log(`${key} -> ${shedules[key]}`);
    }
}