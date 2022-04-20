function numbersPrint(store, delivery) {
    for(let i=0; i<store.length; i++){
        if(i%2!=0){
            store[i]=Number(store[i]);
        }
    }
    for(let i=0; i< delivery.length; i+=2){
        if(store.includes(delivery[i])){
            let index=store.indexOf(delivery[i]);
            store[index+1]+=Number(delivery[i+1])
        }
        else{
            store.push(delivery[i]);
            store.push(delivery[i+1])
        }
    }
    let all=[];
    for(let i=0; i<store.length; i+=2){
        let stoke={
            name: store[i],
            quantity: store[i+1]
        }
        all.push(stoke);
    }
    for (const stoke of all) {
        console.log(`${stoke.name} -> ${stoke.quantity}`);
    }
  }