function numbersPrint(firstName,lastName,age) {
    let person={
        name: firstName,
        lastName: lastName,
        hairColor: age
    }
    console.log(JSON.stringify(person))
}