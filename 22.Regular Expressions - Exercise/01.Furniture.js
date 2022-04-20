function numbersCheck(arr){
    let curr=arr.shift();
    let regex=new RegExp(">>(?<name>[A-Za-z]+)<<(?<price>\\d+(\.\\d+)?)!(?<quantity>\\d+)");
    let subjects=[];
    let total=0;
    let valid="";
    let name="";
    while(curr!="Purchase"){
        valid=regex.exec(curr)
        if(valid!=null){
        subjects.push(valid.groups['name'])
        let price=Number(valid.groups['price'])
        let quantity=Number(valid.groups['quantity'])
        let sum=price*quantity
        total+=sum;
        }
        curr=arr.shift();
    }
    console.log(`Bought furniture:`);
    if(subjects.length>0){
    console.log(subjects.join("\r\n"))
    }
    console.log(`Total money spend: ${total.toFixed(2)}`)
}