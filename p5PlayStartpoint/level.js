// For reference of what to fill the constructor with, check the basicMultiFileAndClassSetup code snippet provided by James in the code_snippetes channel
class Level {
	constructor() {
		this.assets = {};
	}
	p5Load() {
		// Call in preload
		// load images for animation
		this.assets.wall = loadImage('./img/level/wall.png');
		this.assets.ground = loadImage('./img/level/ground.png');
	}
	p5Init() {
		// Call in setup
		// Create sprite && set sprite settings
		GenerateLevel(this.assets);
		cleanupLevel();
	}
	update() {
		populateLevel();

		// Call in draw
		// Call controls && idle animation
	}
}
