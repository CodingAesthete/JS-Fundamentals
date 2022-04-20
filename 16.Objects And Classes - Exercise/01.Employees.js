function numbersPrint(arr) {
    let people=[];
    for(let i=0; i<arr.length;i++){
        let person={
            employeeName: arr[i],
            personalNum: arr[i].length
        }
        people.push(person);
    }
    people.forEach((i)=>console.log(`Name: ${i.employeeName} -- Personal Number: ${i.personalNum}`));
}