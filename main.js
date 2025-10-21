
function getzeroshema() {
    var res = new Array(200).fill(0);
    for (let i = 0; i < 200; i++) {
        res[i] = new Array(200).fill(0);
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

function fillCanva(table, choosecolor, choosecolor2, border, borderOld) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    var len = 8;
    var len2 = 8;
    if (border) {
        len--;
        if (borderOld) {
            len2--;
        }
    }

    console.time("mojaPetla");
    for (var i = 0; i < 200; i++) {
        for (var j = 0; j < 200; j++) {
            if (table[i][j]) {
                ctx.fillStyle = choosecolor;
                ctx.fillRect(i * 8, j * 8, len, len)
            } else {
                ctx.fillStyle = choosecolor2;
                ctx.fillRect(i * 8, j * 8, len2, len2)
            }

        }
    }
    console.timeEnd("mojaPetla");
}

function calcNextstep(table, conf) {
    console.time("calc");
    var newTable = getzeroshema();
    for (let i = 0; i < 200; i++) {
        for (let j = 0; j < 200; j++) {
            nr = calcNeighbor(table, i, j);

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




