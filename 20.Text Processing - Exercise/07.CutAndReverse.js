function numbersCheck(input){
    let firstStr=input.slice(0,input.length/2)
    let secondStr=input.slice(input.length/2)
    function reverseString(str) {
        var newString = "";
        for (var i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }
    let revF=reverseString(firstStr)
    let revS=reverseString(secondStr)
    console.log(revF)
    console.log(revS)
}