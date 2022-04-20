function numbersPrint(radius, height) {
    let volume=height*Math.PI*radius*radius/3;
    let l=((height*height)+(radius*radius));
    let area= Math.PI*radius*(radius + Math.sqrt(radius*radius + height*height))
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}