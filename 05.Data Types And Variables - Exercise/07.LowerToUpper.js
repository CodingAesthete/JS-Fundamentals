function numbersPrint(letter) {
    let num=String(letter).charCodeAt(0);
    if(num>=97 && num<=122){
        console.log('lower-case');
    }
    else{
        console.log('upper-case');
    }
}