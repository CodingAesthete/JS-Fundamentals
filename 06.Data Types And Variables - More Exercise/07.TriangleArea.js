function numbersPrint(first, second, third) {
    let f1=Number(first);
    let f2=Number(second);
    let f3=Number(third);
    let s=(first+second+third)/2;
    let area= Math.sqrt(s*(s - f1)*(s - f2)*(s - f3));
    console.log(area);
}