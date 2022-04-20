function numbersCheck(path) {
    let arr=path.split("\\");
    let curr=arr[arr.length-1].split(".");
    let as=curr.pop();
    console.log(`File name: ${curr.join(".")}`);
    console.log(`File extension: ${as}`);
}