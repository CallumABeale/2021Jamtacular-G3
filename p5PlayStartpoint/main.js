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
	backgroundImg = loadImage('./img/level/background.png');
	testLevel.p5Load();
	testPlayer.p5Load();
}

function setup() {
	createCanvas(CANVASWIDTH, CANVASHEIGHT);
	testLevel.p5Init();
	testPlayer.p5Init();
	camera.zoom = 0.25;
	createEnemies();
	for (let i = 0 ; i<enemies.length ; i++){
	enemies[i].p5Load()
	enemies[i].p5Init()
	}
}

function draw() {
	background(backgroundImg);
	camera.position.x = constrain(testPlayer.sprite.position.x, 375+ walls[0].width/2, 1500*3-375-walls[0].width/2);
	camera.position.y = constrain(testPlayer.sprite.position.y,250+groundGroup[0].height/2, 2750-groundGroup[0].height/2);
	if (camera.zoom < zoomLevel && frameCount > 30 && !keyIsDown(90)) {
		camera.zoom *= 1.1;
	}
	testPlayer.update();
	testLevel.update();
	testPlayer.activeAbility.update();
	for (let i = 0 ; i<enemies.length ; i++){
	enemies[i].update();
	}
	// image(lightningSpriteSheet,testPlayer.sprite.position.x,testPlayer.sprite.position.y)

	drawSprites();
}
function mousePressed() {
	testPlayer.sprite.position.x += groundGroup[0].width;
}
