function numbersPrint(product, count) {
    let price = 0;
    let counter = Number(count);
    switch (product) {
        case "water":
            price = counter * 1.00;
            break;
        case "coffee":
            price = counter * 1.50;
            break;
        case "coke":
            price = counter * 1.40;
            break;
        case "snacks":
            price = counter * 2.00;
            break;
    }
    console.log(price.toFixed(2))
}