function numbersPrint(first, second, third) {
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    if(Number(first)<min){
        min=Number(first);
    }
    if(Number(first)>max){
        max=Number(first);
    }
    if(Number(second)<min){
        min=Number(second);
    }
    if(Number(second)>max){
        max=Number(second);
    }
    if(Number(third)<min){
        min=Number(third);
    }
    if(Number(third)>max){
        max=Number(third);
    }
    console.log(max);
    console.log(first+second+third-(min+max))
    console.log(min);
}