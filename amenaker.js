class Amenaker extends LiveCreatures{
    constructor(x,y)
    {
        super(x,y);
        this.energy = 8;
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
        var emptyCells = this.chooseCell(3);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;

            var newAmenaker = new Amenaker(newX, newY);
            newAmenaker.push(newAmenaker);
            this.energy = 20;
        }
    }

    move() {
        this.energy--
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell && this.energy >= 0) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0;
            this.x = newX
            this.y = newY
        } else {
            this.die()
        }
    }

    eat() {
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {



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
        for (var i in Amenaker) {
            if (this.x == Amenaker[i].x && this.y == Amenaker[i].y) {
                Amenaker.splice(i, 1);
                break;
            }
        }
    }
}