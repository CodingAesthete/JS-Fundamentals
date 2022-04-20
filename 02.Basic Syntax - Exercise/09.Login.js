function numbersPrint(input) {
    let user=input.shift()
    let pass=String(user).split("").reverse();
    let index=0;
    let counter=1;
    while(input[index]!=pass.join("")){
        console.log(`Incorrect password. Try again.`)
        index++;
        counter++;
        if(counter==4){
            console.log(`User ${user} blocked!`);
            return;
        }
    }
    console.log(`User ${user} logged in.`);
} 