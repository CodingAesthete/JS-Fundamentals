function numbersPrint(arr) {
    for(let i=0; i<arr.length; i++){
        let [town,latitude,longitude]=arr[i].split(" | ")
        let city={
            town: town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        console.log(city);
    }
}