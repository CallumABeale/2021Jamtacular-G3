let groundGroup;
let walls;
let current;
var resolution = 15;
let grid = [];
let stack = [];
let maxStack = 0;
let endPos;
let distChecker;
let gravity = 1;
let antiGrav;
let wallTester;
let dropTesters;
let spikePits;
let chestTesters1;
let chestTesters2;
let gameChests;
let bouncingBridges;
let activeGrav;

function GenerateLevel() {
    walls = new Group();
    groundGroup = new Group();
    distChecker = new Group();
    antiGrav = new Group();
    levelGenerated = false;
    wallTester = new Group();
    dropTesters = new Group();
    spikePits = new Group();
    chestTesters1 = new Group();
    chestTesters2 = new Group();
    gameChests = new Group();
    bouncingBridges = new Group();
    activeGrav = new Group();

    for (let y = 0; y < resolution; y++) {
        grid[y] = [];
        for (let x = 0; x < resolution; x++) {
            let cell = new Cell(x, y);
            grid[y][x] = cell;
        }
    }
    current = grid[0][0]
    testSprite = createSprite((current.x + 0.5) * CANVASWIDTH*3 / resolution, (current.y +0.5) * CANVASHEIGHT / resolution *3, 25, 25)

    console.log(current)
    maxStack = 0;

    createMaze();
    endSprite = createSprite((endPos.x + 0.5) * CANVASWIDTH / resolution * 3, (endPos.y + .5) * CANVASHEIGHT / resolution * 3, 25, 25)


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
        if (maxStack < stack.length) {
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
    for (let j = 0 ; j<groundGroup.length ; j++){
        for (let i = 0 ; i<bouncingBridges.length ; i++){
        if (groundGroup[j].antiGrav && groundGroup[j].antiGrav.overlap(bouncingBridges[i])){
            activeGrav.add(bouncingBridges[i]);
            groundGroup[j].antiGrav.remove();
        } 
    }
        if (groundGroup[j].antiGrav && groundGroup[j].antiGrav.collide(spikePits)){
            groundGroup[j].antiGrav.position.y-= walls[0].height*2/3
        } else {
        if (groundGroup[j].antiGrav && groundGroup[j].antiGrav.velocity.y > 0 && groundGroup[j].antiGrav.collide(groundGroup)){
            groundGroup[j].antiGrav.velocity.y = 0
            groundGroup[j].antiGrav.position.y += CANVASHEIGHT/resolution/6;
        }
    }
    if (groundGroup[j].vertDist && groundGroup[j].vertDist.collide(groundGroup[j].antiGrav)){
        groundGroup[j].antiGrav.remove();
        groundGroup[j].vertDist.remove();
        j--;
}
}
    for (let i = 0 ; i<wallTester.length ; i++){
        if (wallTester[i] && wallTester[i].collide(wallTester)){
            dropTester = createSprite(wallTester[i].position.x,wallTester[i].position.y,10,10);
                dropTester.velocity.y = 2
                dropTester.life = 60
                dropTester.done = false;
                wallTester[i].remove();
                dropTesters.add(dropTester)
                i--;
        }
    }
        for (let i = 0 ; i<dropTesters.length ; i++){
            if (dropTesters[i] && dropTesters[i].collide(groundGroup) && !dropTesters[i].done){
                pitSpikes = createSprite(dropTesters[i].position.x,dropTesters[i].position.y - walls[0].height/5,groundGroup[0].width-walls[0].width*2,walls[0].height/3);
                pitSpikes.velocity.y = 1;
                dropTesters[i].done = true;
                bouncingBridge = createSprite(pitSpikes.position.x,pitSpikes.position.y- walls[0].height/2.2,groundGroup[0].width/4,groundGroup[0].height/5);
                bouncingBridge.velocity.x = 1
                bouncingBridges.add(bouncingBridge);
                spikePits.add(pitSpikes);
            }
        }

    for (let i = 0 ; i<bouncingBridges.length ; i++){
        if (bouncingBridges[i].collide(walls)){
            bouncingBridges[i].velocity.x *=-1;
                if (bouncingBridges[i].collide(testPlayer.sprite)){
                    testPlayer.sprite.velocity.x=bouncingBridges[i].velocity.x;

                }
        }
    }
        for (let i = 0 ; i<spikePits.length ; i++){
            spikePits.collide(groundGroup);
            spikePits.collide(walls);
        }
        for (let i = 0 ; i<chestTesters1.length ; i++){
            if (chestTesters1[i] && chestTesters1[i].collide(chestTesters1)){
                chestTest2R = createSprite(chestTesters1[i].position.x, chestTesters1[i].position.y, 10,10);
                chestTest2R.velocity.x = 5;
                chestTest2R.life = 40;
                chestTest2R.dir = 'R';
                chestTesters2.add(chestTest2R);
                chestTest2L = createSprite(chestTesters1[i].position.x, chestTesters1[i].position.y, 10,10);
                chestTest2L.velocity.x = -5;
                chestTest2L.life = 40;
                chestTest2L.dir = 'L';
                chestTesters2.add(chestTest2L);
            
                chestTesters1[i].remove();
                i--;

            }
        }
        for (let i = 0 ; i<chestTesters2.length ; i++){
            if (chestTesters2[i] && chestTesters2[i].collide(walls)){
                if (chestTesters2[i].dir == 'R'){
                    gameChest = createSprite(chestTesters2[i].position.x-walls[0].width/2,chestTesters2[i].position.y,walls[0].width,groundGroup[0].height);
                } else{
                    gameChest = createSprite(chestTesters2[i].position.x+walls[0].width/2,chestTesters2[i].position.y,walls[0].width,groundGroup[0].height);
                }
                chestTesters2[i].remove();
                i--;
                gameChest.velocity.y = 1
                gameChests.add(gameChest);
            }
        }
        for (let i = 0 ; i<gameChests.length ; i++){
            if (gameChests[i]){
                gameChests[i].collide(groundGroup);
            }
        }

}

class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = CANVASWIDTH / resolution *2;
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
            let ground = createSprite(int((this.x + 0.5) * this.w * 1.5), int((this.y) * this.h * 1.5), int(this.w * 1.5 + CANVASWIDTH / resolution / 2.8), int(CANVASHEIGHT / resolution / 1.25));
            ground.immovable = true;
            ground.debug = true;
            ground.antiGrav = createSprite(ground.position.x, ground.position.y + (CANVASHEIGHT / resolution), ground.width/5, ground.height/3)
            ground.antiGrav.velocity.y = 10;

            ground.vertDist = createSprite(ground.position.x, ground.position.y + (CANVASHEIGHT / resolution)-40, 1, 1);
            ground.vertDist.velocity.y = 10
            ground.vertDist.life = 600/resolution;
            distChecker.add(ground.vertDist);
            antiGrav.add(ground.antiGrav);
            groundGroup.add(ground);

            ground.chestTesterU = createSprite(ground.position.x,ground.position.y-10,10,10);
            ground.chestTesterU.velocity.y = -5
            ground.chestTesterU.life = 30
            chestTesters1.add(ground.chestTesterU)
            ground.chestTesterD = createSprite(ground.position.x,ground.position.y+10,10,10);
            ground.chestTesterD.velocity.y = 5
            ground.chestTesterD.life = 30
            chestTesters1.add(ground.chestTesterD)

        }
        if (this.wall[1]) {
            line(xPos + this.w, yPos, xPos + this.w, yPos + this.h)
            let wall = createSprite((this.x + 1) * this.w * 1.5, (this.y + 0.5) * this.h * 1.5, CANVASWIDTH / resolution / 2.8, this.h * 1.9)
            wall.immovable = true;
            wall.debug = true;
            wall.typeTestR = createSprite((this.x + 1) * this.w * 1.5 + 20, (this.y + 0.5) * this.h * 1.5, 10,10)
            wall.typeTestR.velocity.x = 5;
            wall.typeTestR.life = 30;
            wallTester.add(wall.typeTestR)
            wall.typeTestL = createSprite((this.x + 1) * this.w * 1.5 -20, (this.y + 0.5) * this.h * 1.5, 10,10)
            wall.typeTestL.velocity.x = -5
            wall.typeTestL.life = 30;
            wallTester.add(wall.typeTestL)
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