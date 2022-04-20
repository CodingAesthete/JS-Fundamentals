function numbersPrint(input) {
    let allMovies=[];
    for (const line of input) {
      if(line.includes("addMovie"))  {
          let curr=line.replace(/addMovie\s*/,"");
          let movie={};
          movie.name=curr;
          allMovies.push(movie);
      }
     else if(line.includes("directedBy")){
        let [name,director]=line.split(/\s*directedBy\s*/);
        let found = allMovies.find(i => i.name ==name);
        if(found!=undefined){
        found['director']=director;
        }
     }
     else if(line.includes("onDate")){
        let [name,date]=line.split(/\s*onDate\s*/);
        let found = allMovies.find(i => i.name ==name);
        if(found!=undefined){
        found['date']=date;
        }
     }
    }
    for (const movie of allMovies) {
        if(movie.hasOwnProperty('name') &&
        movie.hasOwnProperty('director') &&
        movie.hasOwnProperty('date')){
        console.log(JSON.stringify(movie))}
    }
}