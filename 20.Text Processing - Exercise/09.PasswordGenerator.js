function numbersCheck(arr){
    let first=arr[0];
    let second=arr[1];
    let word=arr[2];
    let as=0;
    let third=first+second;
    for (let i=0; i<third.length;i++) {
        function isVowel(char) {
            if (char.length == 1) {
              var vowels = new Array("a", "e", "i", "o", "u");
              var isVowel = false;
          
              for (e in vowels) {
                if (vowels[e] == char) {
                  isVowel = true;
                }
              }
          
              return isVowel;
            }
          }
          let check=isVowel(third[i])
          if(check==true){
              third=third.replace(third[i],word[as].toUpperCase())
              as++;
              if(as>word.length-1){
                  as=0
              }
          }
    }
    let res="";
    for(let i=third.length-1; i>=0; i--){
        res+=third[i];
    }
    console.log(`Your generated password is ${res}`)
}