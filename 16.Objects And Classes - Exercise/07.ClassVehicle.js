class Vehicle{
constructor(type,model,{engine,power},fuel){
    this.type=type;
    this.model=model;
    this.parts={
        engine: engine,
        power: power,
        quality: engine*power
    }
    this.fuel= fuel
}
drive(fuelTaken){
return this.fuel-=fuelTaken
}
}