class Bomb extends LiveCreatures{    constructor(x,y)
    {
        super(x,y);
      
    }


    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }


            }
        }
        return found;
    }

    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;

            var bo = new Bomb(newX, newY);
            bombarr.push(bo);

        }
    }

    explode() {
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == 1) {
                    matrix[y][x] = 0
                    for (var i in grassArr) {
                        if (x == grassArr[i].x && y == grassArr[i].y) {
                            grassArr.splice(i, 1);
                            this.die()
                            break;
                        }
                    }
                }

                if (matrix[y][x] == 2) {

                    matrix[y][x] = 0
                    for (var i in grassEaterArr) {
                        if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                            grassEaterArr.splice(i, 1);
                            this.die()
                            break;
                        }
                    }
                }

                if (matrix[y][x] == 3) {

                    matrix[y][x] = 0
                    for (var i in PredatorArr) {
                        if (x == PredatorArr[i].x && y == PredatorArr[i].y) {
                            PredatorArr.splice(i, 1);
                            this.die()
                            break;
                        }
                    }
                }
                if (matrix[y][x] == 4) {

                    matrix[y][x] = 0
                    for (var i in AmenakerArr) {
                        if (x == AmenakerArr[i].x && y == AmenakerArr[i].y) {
                            AmenakerArr.splice(i, 1);
                            this.die()
                            break;
                        }
                    }
                }
            }
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in BombArr) {
            if (this.x == BombArr[i].x && this.y == BombArr[i].y) {
                BombArr.splice(i, 1);
                break;
            }

        }
    }

}