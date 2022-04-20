function numbersPrint(band, album, song) {
    let lengthSong=
    (album.length * band.length) * song.length / 2
    let times=Math.ceil(Number(lengthSong)/2.5);
    console.log(`The plate was rotated ${times} times.`);
}