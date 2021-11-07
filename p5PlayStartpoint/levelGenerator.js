let groundGroup;
let walls;
let current;
var resolution = 10;
let grid = [];
let stack = [];
let maxStack = 0;
let endPos;
let distChecker;

function GenerateLevel() {
    walls = new Group();
    groundGroup = new Group();
    levelGenerated = false;

    for (let y = 0; y < resolution; y++) {
        grid[y] = [];
        for (let x = 0; x < resolution; x++) {
            let cell = new Cell(x, y);
            grid[y][x] = cell;
        }
    }
    current = grid[int(random(grid.length))][int(random(grid[0].length))]
    testSprite = createSprite((current.x + 0.5) * CANVASWIDTH / resolution, (current.y + .5) * CANVASHEIGHT / resolution, 25, 25)

    console.log(current)
    maxStack = 0;

    createMaze();
    endSprite = createSprite((endPos.x + 0.5) * CANVASWIDTH / resolution, (endPos.y + .5) * CANVASHEIGHT / resolution, 25, 25)


}

function createMaze() {
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            // grid[y][x].show();
        }
    }
    current.visited = true;
    //step 1
    let next = current.checkNeighbours();
    if (next) {
        next.visited = true;


        //step 2
        stack.push(current);
        if (stack.length > maxStack) {
            maxStack = stack.length;
            endPos = createVector(stack[maxStack - 1].x, stack[maxStack - 1].y)
        }

        //step 3
        removeWalls(current, next)

        // step 4
        current = next;

    } else if (stack.length > 0) {
        current = stack.pop()

    } else if (stack.length == 0 && !levelGenerated) {

        for (let y = 0; y < resolution; y++) {
            for (let x = 0; x < resolution; x++) {
                grid[y][x].show();
            }
        }
        levelGenerated = true;
        let ground = createSprite(CANVASWIDTH * 1.5, CANVASHEIGHT * 3, CANVASWIDTH * 3, CANVASHEIGHT / resolution / 1.25)
        let wall = createSprite(0, CANVASHEIGHT * 1.5, CANVASWIDTH / resolution / 1.5, CANVASHEIGHT * 3 + CANVASHEIGHT / resolution / 1.25);
        ground.immovable = true;
        ground.debug = false;
        wall.immovable = true;
        groundGroup.add(ground);
        walls.add(wall);

    }
    if (!levelGenerated) {
        createMaze();
    } else {
        distChecker = new Group();
        for (let i = 0; i < groundGroup.length; i++) {
            groundGroup[i].vertDist = createSprite(groundGroup[i].position.x, groundGroup[i].position.y - CANVASHEIGHT / resolution, 1, 1);
            groundGroup[i].vertDist.velocity.y = -10;
            distChecker.add(groundGroup[i].vertDist);
        }
    }
}
function removeWalls(a, b) {
    let x = a.x - b.x
    let y = a.y - b.y

    if (x == 1) {
        b.wall[1] = false;
    } else if (x == -1) {
        a.wall[1] = false;
    } else if (y == 1) {
        a.wall[0] = false;
    } else if (y == -1) {
        b.wall[0] = false
    }
}

function cleanupLevel() {

}

function populateLevel() {


}

class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = CANVASWIDTH / resolution * 2;
        this.h = CANVASHEIGHT / resolution * 2;
        this.wall = [true, true];
    }
    show() {
        let xPos = this.x * this.w;
        let yPos = this.y * this.h;
        stroke(255);
        strokeWeight(1)
        if (this.wall[0]) {
            line(xPos, yPos, xPos + this.w, yPos)
            let ground = createSprite(int((this.x + 0.5) * this.w * 1.5), int((this.y) * this.h * 1.5), int(this.w * 1.5 + CANVASWIDTH / resolution / 2.5), int(CANVASHEIGHT / resolution / 1.25));
            ground.immovable = true;
            ground.debug = true;
            groundGroup.add(ground)
        }
        if (this.wall[1]) {
            line(xPos + this.w, yPos, xPos + this.w, yPos + this.h)
            let wall = createSprite((this.x + 1) * this.w * 1.5, (this.y + 0.5) * this.h * 1.5, CANVASWIDTH / resolution / 2.5 + 20, this.h * 1.9)
            wall.immovable = true;
            wall.debug = true;
            walls.add(wall)
        }

        if (this.visited) {
            fill(255, 0, 0, 85);
            noStroke()
            rect(xPos, yPos, this.w, this.h);
        }
    }
    checkNeighbours() {
        let neighbours = [];
        if (this.y > 0) {
            let top = grid[this.y - 1][this.x];
            if (top && !top.visited) {
                neighbours.push(top)
            }
        }
        if (this.x < resolution - 1) {
            let right = grid[this.y][this.x + 1];
            if (right && !right.visited) {
                neighbours.push(right)
            }
        }
        if (this.y < resolution - 1) {
            let bottom = grid[this.y + 1][this.x];
            if (bottom && !bottom.visited) {
                neighbours.push(bottom)
            }
        }
        if (this.x > 0) {
            let left = grid[this.y][this.x - 1];

            if (left && !left.visited) {
                neighbours.push(left)
            }
        }

        if (neighbours.length > 0) {
            return random(neighbours);
        } else {
            return undefined;
        }
    }

}