//this is the one you'll write your code in make sure to change the script tag in index.html to use main.js instead of test.js
const CANVASWIDTH = 3500;
const CANVASHEIGHT = 3500;
let testLevel;
function preload() {}

function setup() {
    createCanvas(1500,1000);
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
        camera.zoom = resolution/10
        testPlayer.update();
    }
    drawSprites();
}
