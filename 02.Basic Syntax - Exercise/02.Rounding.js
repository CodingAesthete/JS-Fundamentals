function numbersPrint(number,precision) {
    if(Number(precision)>15){
        precision=15;
    }
    console.log(parseFloat(Number(number).toFixed(precision)));
}