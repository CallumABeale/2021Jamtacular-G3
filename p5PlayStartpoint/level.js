// For reference of what to fill the constructor with, check the basicMultiFileAndClassSetup code snippet provided by James in the code_snippetes channel
class Level {
	constructor() {
		this.assets = {};
	}
	p5Load() {
		// Call in preload
		// load images for animation
		this.assets.chestOpen = loadImage('./img/level/chest-open.png');
		this.assets.chest = loadImage('./img/level/chest.png');
		this.assets.ground = loadImage('./img/level/ground.png');
		this.assets.pad = loadImage('./img/level/pad.png');
		this.assets.platform = loadImage('./img/level/platform.png');
		this.assets.portalStart = loadAnimation('./img/level/portal-green.gif');
		this.assets.portalEnd = loadAnimation('./img/level/portal-purple.gif');
		this.assets.spikes = loadImage('./img/level/spikes.png');
		this.assets.wall = loadImage('./img/level/wall.png');
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
