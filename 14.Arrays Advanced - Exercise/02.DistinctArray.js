function numbersPrint(input) {
    let uniqueChars = input.filter((c, index) => {
        return input.indexOf(c) === index;
    });
    console.log(uniqueChars.join(" "))
}