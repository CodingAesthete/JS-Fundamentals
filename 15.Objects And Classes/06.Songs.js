function numbersPrint(arr) {
    class Song{
        constructor(typeList,name, time){
            this.typeList=typeList;
            this.name=name;
            this.time=time
        }
    }
    let songs=arr.shift();
    let chosen=arr.pop();
    let songas=[];
    for(let i=0; i<songs; i++){
        let [typeList,name,time]=arr[i].split("_")
        let song=new Song(typeList,name,time);
        songas.push(song);
    }
    if(chosen=="all"){
        songas.forEach((i)=>console.log(i.name))
    }
    else{
        let filtered=songas.filter((i)=>i.typeList==chosen);
        filtered.forEach((i)=>console.log(i.name));
    }
}