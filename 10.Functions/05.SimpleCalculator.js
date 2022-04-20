function numbersPrint(num1, num2, action) {
    let res = 0;
    switch (action) {
        case "multiply":
            res = num1*num2;
            break;
        case "divide":
            res = num1/num2;
            break;
        case "add":
            res = num1+num2;
            break;
        case "subtract":
            res = num1-num2;
            break;
    }
    console.log(res)
}