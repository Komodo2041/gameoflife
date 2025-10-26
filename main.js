

function getzeroshema() {
    var res = new Array(200).fill(0);
    for (let i = 0; i < 200; i++) {
        res[i] = new Array(200).fill(0);
    }
    return res;
}

function getgen0() {
    var res = new Array(50).fill(0);
    for (let i = 0; i < 50; i++) {
        res[i] = new Array(50).fill(0);
    }
    return res;
}

function drawGeneration0(skala) {
    res = getzeroshema();
    for (let i = 0; i < 200; i++) {
        for (let j = 0; j < 200; j++) {
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

function getMaxRandom(max) {
    var n = Math.floor(Math.random() * (max + 1));
    return n;
}

function fillCanva(table, choosecolors, border, options) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    var moveX = 0;
    var moveY = 0;
    var move2X = 0;
    var move2Y = 0;

    var len = 8;
    var len2 = 8;
    if (border) {
        len--;
        if (options[0]) {
            len--;
            moveX = 1;
            moveY = 1;
        }
        if (options[1]) {
            len2 = 6;
            move2X = 1;
            move2Y = 1;
        }
    }

    console.time("mojaPetla");
    for (var i = 0; i < 200; i++) {
        for (var j = 0; j < 200; j++) {
            if (border && options[0] && options[3]) {
                moveX = getMaxRandom(options[3]);
                moveY = getMaxRandom(options[3]);
                len = 8 - options[3];
            }
            if (border && options[1] && options[2]) {
                move2X = getMaxRandom(2);
                move2Y = getMaxRandom(2);
            }

            if (table[i][j]) {
                if (options[0]) {
                    ctx.fillStyle = choosecolors[2];
                    ctx.fillRect(i * 8, j * 8, 8, 8);
                }
                ctx.fillStyle = choosecolors[0];
                ctx.fillRect(i * 8 + moveX, j * 8 + moveY, len, len);
                if (options[5]) {
                    moveX = getMaxRandom(options[3]);
                    moveY = getMaxRandom(options[3]);
                    ctx.fillRect(i * 8 + moveX, j * 8 + moveY, len, len);
                }

            } else {
                if (border && options[1]) {
                    ctx.fillStyle = choosecolors[2];
                    ctx.fillRect(i * 8, j * 8, 8, 8);
                }
                ctx.fillStyle = choosecolors[1];
                ctx.fillRect(i * 8 + move2X, j * 8 + move2Y, len2, len2)
            }

        }
    }
    console.timeEnd("mojaPetla");
}

function calcNextstep(table, conf, tryb) {
    console.time("calc");
    var newTable = getzeroshema();
    for (let i = 0; i < 200; i++) {
        for (let j = 0; j < 200; j++) {
            if (tryb == 1) {
                nr = calcNeighbor(table, i, j);
            } else {
                nr = calcNeighbor25(table, i, j, tryb);
            }
            if (table[i][j]) {
                if (conf[1][nr]) {
                    newTable[i][j] = 1;
                } else {
                    newTable[i][j] = 0;
                }
            } else {
                if (conf[0][nr]) {
                    newTable[i][j] = 1;
                } else {
                    newTable[i][j] = 0;
                }
            }
        }
    }
    console.timeEnd("calc");
    return newTable;
}

function calcNeighbor(table, x, y) {
    let res = 0;

    for (i = -1; i <= 1; i++) {
        for (j = -1; j <= 1; j++) {
            if (x + i >= 0 && y + j >= 0 && x + i < 200 && y + j < 200) {
                if (table[x + i][y + j]) {
                    res++;
                }
            }
        }
    }

    if (table[x][y]) {
        res--;
    }
    return res;
}

function getPattern(id, list) {
    var res = null;
    for (const obiekt of list) {
        if (id == obiekt.id) {
            res = obiekt;
        }
    }

    return res;
}

function calcNeighbor25(table, x, y, tryb) {

    var modeTable = getModeGridTryb(tryb);
    let res = 0;

    for (i = -2; i <= 2; i++) {
        for (j = -2; j <= 2; j++) {
            if (x + i >= 0 && y + j >= 0 && x + i < 200 && y + j < 200) {
                if (modeTable[i + 2][j + 2] && table[x + i][y + j]) {
                    res++;
                }
            }
        }
    }

    return res;


}

function getModeGridTryb(tryb) {
    var res = [];
    var table = []
    table[2] = [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
    ];
    table[3] = [
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1],
    ];
    table[4] = [
        [0, 1, 0, 1, 0],
        [1, 1, 0, 1, 1],
        [0, 0, 0, 0, 0],
        [1, 1, 0, 1, 1],
        [0, 1, 0, 1, 0],
    ];
    table[5] = [
        [0, 1, 1, 1, 0],
        [1, 0, 1, 0, 1],
        [1, 1, 0, 1, 1],
        [1, 0, 1, 0, 1],
        [0, 1, 1, 1, 0],
    ];
    table[6] = [
        [0, 1, 0, 1, 0],
        [1, 0, 0, 0, 1],
        [0, 0, 0, 0, 0],
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
    ];
    table[7] = [
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [1, 1, 0, 1, 1],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
    ];
    table[8] = [
        [1, 0, 0, 1, 1],
        [1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1],
        [1, 1, 0, 0, 1],
    ];
    table[9] = [
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0],
        [1, 0, 0, 0, 1],
    ];
    table[10] = [
        [0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0],
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0],
    ];
    table[11] = [
        [1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0],
        [1, 0, 0, 0, 1],
        [0, 0, 0, 0, 0],
        [1, 0, 1, 0, 1],
    ];

    table[12] = [
        [0, 1, 0, 1, 0],
        [0, 0, 0, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 1, 0, 1, 0],
    ];
    table[13] = [
        [1, 0, 0, 0, 1],
        [0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [1, 0, 0, 0, 1],
    ];
    table[14] = [
        [0, 0, 0, 1, 0],
        [0, 1, 1, 0, 0],
        [1, 0, 0, 0, 1],
        [0, 0, 1, 1, 0],
        [0, 1, 0, 0, 0],
    ];

    if (table[tryb] == undefined) {
        return table[2];
    } else {
        return table[tryb];
    }

}




