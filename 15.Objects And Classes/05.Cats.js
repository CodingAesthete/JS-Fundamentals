function numbersPrint(arr) {
    class Cat{
        constructor(name,age){
            this.name=name;
            this.age=age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    for (let str of arr) {
        let [catName,age]= str.split(" ")
        let cat= new Cat(catName,age);
        cat.meow();
    }
}