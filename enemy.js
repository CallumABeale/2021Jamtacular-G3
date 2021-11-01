// Should only contain information that is shared across ALL enemies
class Enemy {
	constructor(health) {
		this.sprite;
		this.animations = {};
		this.health = health;
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
	movement() {}
}
