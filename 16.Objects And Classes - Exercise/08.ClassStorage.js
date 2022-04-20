class Storage{
    constructor(capacity){
        this.capacity=capacity;
        this.storage=[];
    }
    get totalCost(){
        return this.storage.reduce(
            ( acc, el ) =>acc+el.price*el.quantity,0)
    }
    addProduct(product){
        this.storage.push(product);
        this.capacity-=product.quantity ;
        return;
    }
    getProducts(){
        let output=[];
        this.storage.forEach(e => {
            output.push(JSON.stringify(e))
        });
        return output.join("\n")
    }
}