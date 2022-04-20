function numbersCheck(input){
    let regex=/\b(?<day>\d{2})([.\/-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g
    while((valid=regex.exec(input))!==null){
        let res="";
        res+='Day: '+valid.groups['day'];
        res+=', Month: '+valid.groups['month']
        res+=', Year: '+valid.groups['year']
        console.log(res)
    }
}