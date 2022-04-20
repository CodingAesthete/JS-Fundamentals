function numbersCheck(input) {
    let companies={};
    for (const el of input) {
        let [name, num]=el.split(" -> ")
        if(!companies.hasOwnProperty(name)){
        companies[name]=[];
        }
        if(!companies[name].includes(num))
        companies[name].push(num)
    }
    function sortObj(obj) {
        return Object.keys(obj).sort().reduce(function (result, key) {
          result[key] = obj[key];
          return result;
        }, {});
      }
      let companiess=sortObj(companies)
    for (const key in companiess) {
        console.log(key)
        for (const el of companiess[key]) {
            console.log(`-- ${el}`)
        }
    }
}