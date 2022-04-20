function numbersCheck(arr) {
    arr.pop();
    let totalIncome = 0;
    for(let i=0; i<arr.length; i++){
        let regex = /%([A-Z][a-z]+)%[^|$%.]*<(\w+)>[^|$%.]*\|(\d+)\|[^|$%\d]*(\d+\.?\d*)\$/g
        let result = regex.exec(arr[i]);
        if(result!=null){
        let currentSum = Number(result[3]) * Number(result[4]);
        console.log(`${result[1]}: ${result[2]} - ${currentSum.toFixed(2)}`);
        totalIncome += currentSum;
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}