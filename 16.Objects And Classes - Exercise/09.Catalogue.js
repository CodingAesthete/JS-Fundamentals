function numbersCheck(arr){
    let products=[];
    for (const el of arr) {
        let curr=el.split(" : ")
        let product={
            productName: curr[0],
            productPrice: Number(curr[1])
        }
        products.push(product);
    }
    products.sort(function (a, b) {
        return a.productName.localeCompare(b.productName)
      });
      let first="";
      for (const product of products) {
          if(product.productName.charAt(0)===first){
              console.log(`  ${product.productName}: ${product.productPrice}`);
          }
          else{
              first=product.productName.charAt(0);
              console.log(first);
              console.log(`  ${product.productName}: ${product.productPrice}`);
          }
      }
}