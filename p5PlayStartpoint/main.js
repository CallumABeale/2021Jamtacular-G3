//this is the one you'll write your code in make sure to change the script tag in index.html to use main.js instead of test.js
const CANVASWIDTH = 1500;
const CANVASHEIGHT = 1000;
let testLevel = new Level();
let testPlayer = new Player();
zoomLevel = resolution / 8;
function preload() {
	lightningAnim = loadAnimation(
		'img/abilities/lightning/tile000.png',
		'img/abilities/lightning/tile001.png',
		'img/abilities/lightning/tile002.png',
		'img/abilities/lightning/tile003.png',
		'img/abilities/lightning/tile004.png',
		'img/abilities/lightning/tile005.png',
		'img/abilities/lightning/tile006.png',
		'img/abilities/lightning/tile007.png'
	);
	testLevel.p5Load();
	testPlayer.p5Load();
}

function setup() {
	createCanvas(CANVASWIDTH, CANVASHEIGHT);
	testLevel.p5Init();
	testPlayer.p5Init();
	camera.zoom = 0.25;
}

function draw() {
	background('#1c1117');
	camera.position.x = testPlayer.sprite.position.x;
	camera.position.y = testPlayer.sprite.position.y;
	if (camera.zoom < zoomLevel && frameCount > 30 && !keyIsDown(90)) {
		camera.zoom *= 1.1;
	}
	testPlayer.update();
	testLevel.update();
	testPlayer.activeAbility.update();
	// image(lightningSpriteSheet,testPlayer.sprite.position.x,testPlayer.sprite.position.y)

	drawSprites();
}
function mousePressed() {
	testPlayer.sprite.position.x += groundGroup[0].width;
}
