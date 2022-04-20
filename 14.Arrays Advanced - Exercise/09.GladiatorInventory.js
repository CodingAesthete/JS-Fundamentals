function numbersPrint(input) {
    let arr = input.shift().split(" ");
    for (let i = 0; i < input.length; i++) {
        let curr = input[i].split(" ")
        if (curr[0] == "Buy") {
            if(!arr.includes(curr[1])){
            arr.push(curr[1])}
        }
        else if (curr[0] == "Trash") {
            let index = arr.indexOf(curr[1]);
            if (index != -1) {
                arr.splice(index, 1);
            }
        }
        else if (curr[0] == "Repair") {
            let index = arr.indexOf(curr[1]);
            let el = "";
            if (index != -1) {
                el = arr.splice(index, 1);
            }
            arr.push(el);
        }
        else if (curr[0] == "Upgrade") {
            curr.shift();
            curr = curr.toString()
            let car = curr.split("-")
            let index = arr.indexOf(car[0]);
            let el = "";
            if (index != -1) {
                let el = arr.splice(index + 1, 0, `${car[0]}:${car[1]}`);
            }
            arr.push(el);

        }
    }
    console.log(arr.join(" "));
}