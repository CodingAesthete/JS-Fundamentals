function numbersPrint(input) {
    let centuries = Number(input);
    let years = centuries * 100;
    let days = Math.trunc(years * 365.242199);
    let hours = days * 24;
    let minutes = hours * 60;
    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}