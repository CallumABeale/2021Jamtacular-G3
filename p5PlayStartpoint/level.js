// For reference of what to fill the constructor with, check the basicMultiFileAndClassSetup code snippet provided by James in the code_snippetes channel
class Level {
	constructor() {}
	p5Load() {
		// Call in preload
		// load images for animation
	}
	p5Init() {
		// Call in setup
		// Create sprite && set sprite settings
		GenerateLevel();
		cleanupLevel();
		populateLevel();
	}
	update() {
		// Call in draw
		// Call controls && idle animation
	}
}

