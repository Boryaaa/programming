
function generateMatrix(matLength, gr, grEa, pre, ame, bo) {
    let matrix = [];
    for (let i = 0; i < matLength; i++) {
        matrix.push([])
        for (let j = 0; j < matLength; j++) {
            matrix[i].push(0)
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEa; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < pre; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < ame; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 4;
        }
    }
    for (let i = 0; i < bo; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 5;
        }
    }


    return matrix;
}
let matrix = generateMatrix(20, 222, 8, 5, 1, 35)

var side = 120;

let grassArr = [];
let grassEaterArr = [];
let PredatorArr = [];
let AmenakerArr = [];
let BombArr = [];

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x, y);
                grassEaterArr.push(grEat)
            }
            else if (matrix[y][x] == 3) {
                let pre = new Predator(x, y);
                PredatorArr.push(pre)
            }
            else if (matrix[y][x] == 4) {
                let ame = new Amenaker(x, y);
                AmenakerArr.push(ame)
            }
            else if (matrix[y][x] == 5) {
                let bo = new Bomb(x, y);
                BombArr.push(bo)
            }

        }
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green"); //grass
            }
            else if (matrix[y][x] == 0) {
                fill(186, 74, 0); //grassEater
            } else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");//predator
            } else if (matrix[y][x] == 4) {
                fill("Purple");//amenaker
            }
            else if (matrix[y][x] == 5) {
                fill("Black"); //bomb
            }

            rect(x * side, y * side, side, side);


        }
    }

    for (let i in grassArr) {
        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }
    for (let i in PredatorArr) {
        PredatorArr[i].eat()
    }
    for (let i in AmenakerArr) {
        AmenakerArr[i].eat()
    }
    for (let i in BombArr) {
        BombArr[i].explode()
    }

}

