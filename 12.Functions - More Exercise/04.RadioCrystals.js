function numbersPrint(arr) {
    let target=Number(arr.shift());
    for(let i=0; i<=arr.length-1;i++){
        console.log(`Processing chunk ${arr[i]} microns`)
        let cut=0;
        let lap=0;
        let grind=0;
        let etch=0;
        let curr=arr[i];
        while(curr/4>=target){
            cut++;
            curr/=4;
        }
        if(cut>0){
        console.log(`Cut x${cut}`)
        curr=Math.floor(curr);
        console.log(`Transporting and washing`)
        }
        if(curr==target){
            console.log(`Finished crystal ${curr} microns`);
            continue;
        }
        
        while(curr-0.2*curr>=target){
            lap++;
            curr-=0.2*curr;
        }
        if(lap>0){
        console.log(`Lap x${lap}`)
        curr=Math.floor(curr);
        console.log(`Transporting and washing`)
        }
        if(curr==target){
            console.log(`Finished crystal ${curr} microns`);
            continue;
        }
        while(curr-20>=target){
            grind++;
            curr-=20;
        }
        if(grind>0){
        console.log(`Grind x${grind}`)
        curr=Math.floor(curr);
        console.log(`Transporting and washing`)
        }
        if(curr==target){
            console.log(`Finished crystal ${curr} microns`);
            continue;
        }
        while(curr>target){
            etch++;
            curr-=2;
            if(curr<=target){
                break;
            }
        }
        if(etch>0){
        console.log(`Etch x${etch}`)
        curr=Math.floor(curr);
        console.log(`Transporting and washing`)
        }
        if(curr==target){
            console.log(`Finished crystal ${curr} microns`);
            continue;
        }
        if(curr<target){
            curr++;
            console.log('X-ray x1');
        }
        console.log(`Finished crystal ${curr} microns`);
    }
}