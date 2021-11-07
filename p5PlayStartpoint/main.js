//this is the one you'll write your code in make sure to change the script tag in index.html to use main.js instead of test.js
const CANVASWIDTH = 1500;
const CANVASHEIGHT = 1000;
let testLevel;
zoomLevel = resolution/5
zoomSpeed = 0.001
function preload() {}

function setup() {
    createCanvas(CANVASWIDTH,CANVASHEIGHT);
    testLevel = new Level();
    testLevel.p5Init();
    testPlayer = new Player();
    testPlayer.p5Init();
camera.zoom = .25
}

function draw() {
    background(0);
            camera.position.x = testPlayer.sprite.position.x
            camera.position.y = testPlayer.sprite.position.y
            if (camera.zoom < zoomLevel && frameCount > 30) {
        camera.zoom += zoomSpeed
        zoomSpeed *=1.1;
        }
        testPlayer.update();
        testLevel.update();

    drawSprites();
}
