function numbersPrint(input) {
    let check=true;
    if(input.length<6 || input.length>10){
        console.log("Password must be between 6 and 10 characters");
        check=false;
    }
    let checko=true;
    for(let i=0; i<input.length;i++){
        if(!((String(input[i]).charCodeAt()>=65 &&
        String(input[i]).charCodeAt()<=90)||
        (String(input[i]).charCodeAt()>=97 &&
        String(input[i]).charCodeAt()<=122||
        String(input[i]).charCodeAt()>=48 &&
        String(input[i]).charCodeAt()<=57))){
            checko=false;
        }
    }
    if(checko==false){
        console.log("Password must consist only of letters and digits");
        check=false;
    }
    let number=0;
    for(let i=0; i<input.length;i++){
        if(String(input[i]).charCodeAt(0)>=48 &&
        String(input[i]).charCodeAt(0)<=57){
            number++;
        }
    }
    if(number<2){
        console.log("Password must have at least 2 digits");
        check=false;
    }
    if(check==true){
        console.log("Password is valid");
    }
}