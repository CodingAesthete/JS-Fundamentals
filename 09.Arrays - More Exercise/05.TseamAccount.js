function numbersPrint(arr) {
    let arr2=arr[0].split(" ");
    for(let i=1 ; i<=arr.length-1; i++){
        if(arr[i]=="Play"){
            break;
        }
        let curr=arr[i].split(" ");
        let command=curr[0];
        let name=curr[1];
        if(command=="Install" && arr2.includes(name)==false){
            arr2.push(name);
        }
        else if(command=="Uninstall" && arr2.includes(name)==true){
            let index=arr2.indexOf(name);
            arr2.splice(index,1);
        }
        else if(command=="Update" && arr2.includes(name)){
            let index=arr2.indexOf(name);
            arr2.splice(index,1);
            arr2.push(name);
        }
        else if(command=="Expansion"){
            let curre=name.split("-");
            let game=curre[0];
            let extra=curre[1];
            if(arr2.includes(game)){
                let index=arr2.indexOf(game);
                let newCurr=curre.join(':');
                arr2.splice(index+1,0, newCurr);
            }
        }
    }
    console.log(arr2.join(' '));
}