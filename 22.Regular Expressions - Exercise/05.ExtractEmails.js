function numbersCheck(input) {
    let regex=/(^|(?<=\s))(([a-zA-Z0-9]+)([\.\-_]?)([A-Za-z0-9]+)(@)([a-zA-Z]+([\.\-_][A-Za-z]+)+))/g
    while((valid=regex.exec(input))!=null){
        console.log(valid[0])
    }
}