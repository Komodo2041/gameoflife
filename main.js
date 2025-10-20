
function getzeroshema() {
    var res = new Array(500).fill(0);
    for (let i = 0; i < 500; i++) {
        res[i] = new Array(500).fill(0);
    }
    return res;
}

function drawGeneration0(skala) {
    res = getzeroshema();
    for (let i = 0; i < 500; i++) {
        for (let j = 0; j < 500; j++) {
            res[i][j] = checkskala(skala);
        }
    }
    return res;
}

function checkskala(r) {
    var n = Math.floor(Math.random() * 100);
    if (n >= (100 - r)) {
        return 1;
    } else {
        return 0;
    }
}

function fillCanva(table, choosecolor) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    let imageData = ctx.createImageData(1, 1);
    imageData.data[0] = choosecolor[0]; // Red
    imageData.data[1] = choosecolor[1]; // Green
    imageData.data[2] = choosecolor[2]; // Blue
    imageData.data[3] = 255; // Alpha

    let imageDataWhite = ctx.createImageData(1, 1);
    imageDataWhite.data[0] = 255; // Red
    imageDataWhite.data[1] = 255; // Green
    imageDataWhite.data[2] = 255; // Blue
    imageDataWhite.data[3] = 255; // Alpha

    console.time("mojaPetla");

    for (var i = 0; i < 300; i++) {
        for (var j = 0; j < 300; j++) {
            if (table[i][j]) {
                ctx.fillStyle = 'blue'
                ctx.fillRect(i * 4, j * 4, i * 4 + 3, j * 4 + 3)
            } else {
                ctx.fillStyle = 'white';
                ctx.fillRect(i * 4, j * 4, i * 4 + 3, j * 4 + 3)
            }

        }
    }
    console.timeEnd("mojaPetla");

}


function x() {
    alert('sss');
}