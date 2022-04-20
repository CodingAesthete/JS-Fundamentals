function numbersPrint(input2) {
    let people=[];
    for (const input of input2) {
        let [name,level,items]=input.split(" / ");
        let curr={
            name: name,
            level: Number(level),
            items: items
        }
        people.push(curr);
        
    }
    let people2=people.sort(function(a, b){return a.level-b.level})
        for (const person of people2) {
        console.log(`Hero: ${person.name}`);
        console.log(`level => ${person.level}`);
        console.log(`items => ${person.items}`);
    }
}