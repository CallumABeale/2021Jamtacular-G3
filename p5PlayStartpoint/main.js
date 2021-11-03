//this is the one you'll write your code in make sure to change the script tag in index.html to use main.js instead of test.js
const CANVASWIDTH = 1600;
const CANVASHEIGHT = 800;
let testLevel;
function preload() {}

function setup() {
    createCanvas(CANVASWIDTH,CANVASHEIGHT);
    testLevel = new Level();
    testLevel.p5Init();
    testPlayer = new Player();
    testPlayer.p5Init();
}

function draw() {
    background(0);
    if (frameCount>10){
        camera.position.x = testPlayer.sprite.position.x
        camera.position.y = testPlayer.sprite.position.y
        // camera.zoom = resolution*.75
        testPlayer.update();
    }
    drawSprites();
}
