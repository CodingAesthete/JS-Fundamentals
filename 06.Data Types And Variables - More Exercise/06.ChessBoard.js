function numbersPrint(num) {
    console.log(`<div class="chessboard">`);
    let color = "black";
    for (let i = 1; i <= num; i++) {
        console.log(`  <div>`);
        for (let n = 1; n <= num; n++) {
            
            console.log(`    <span class="${color}"></span>`);
            if(n==num){
                if(n%2==0){
                break;
                }
                else{
                    if(color=="black"){
                        color="white";
                    }
                    else{
                        color="black";
                    }
                    break;
                }
            }
            if(color=="black"){
                color="white";
            }
            else{
                color="black";
            }
            
        }
        console.log(`  </div>`);
    }
    console.log(`</div>`);
}