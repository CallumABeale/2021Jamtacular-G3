class Container {
	constructor() {
		this.sprite;
		this.animations = {};
		this.contents;
	}
	p5Load() {
		// Call in preload
		// load images for animation
	}
	p5Init() {
		// Call in setup
		// Create sprite && set sprite settings
	}
	update() {
		// Call in draw
		// Call controls && idle animation
	}
	idle() {}
}
