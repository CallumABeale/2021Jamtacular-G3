class Item {
	constructor(active, effect) {
		this.sprite;
		this.animations = {};
		this.active = active;
		this.effect = effect;
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
}
