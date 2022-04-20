function numbersPrint(number) {
    if(number<100){
        let count=number/10;
        let per=10-count;
        let puncts=10-per;
        let pers="";
        for(let i=0; i<puncts; i++){
            pers+=`%`;
        }
        let persi="";
        for(let i=0; i<per; i++){
            persi+=`.`;
        }
        console.log(`${number}% [${pers}${persi}]`);
        console.log(`Still loading...`);
    }
}