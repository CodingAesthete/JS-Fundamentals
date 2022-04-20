function numbersPrint(first, second, third) {
    let maximal=Number.MIN_SAFE_INTEGER;
    if(Number(first)>maximal){
        maximal=Number(first);
    }
    if(Number(second)>maximal){
        maximal=Number(second);
    }
    if(Number(third)>maximal){
        maximal=Number(third);
    }
    console.log(maximal);
}