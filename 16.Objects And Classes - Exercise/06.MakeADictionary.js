function numbersPrint(input) {
    let dictionary=[];
    for (const line of input) {
        let curr=line.split(":")
        let Term=curr[0].substring(2,curr[0].length-1)
        let Definition=curr[1].substring(1,curr[1].length-2)
        let found=dictionary.find(i=>i.Term==Term)
        if(found!=undefined){
            found['Definition']=Definition
        }
        else{
            let word={};
            word['Term']=Term
            word['Definition']=Definition
            dictionary.push(word);
        }
    }
    let people2=dictionary.sort(function(a, b) {
        var nameA = a.Term.toUpperCase();
        var nameB = b.Term.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    for (let line of people2) {
        console.log(`Term: ${line.Term} => Definition: ${line.Definition}`)
    }
}