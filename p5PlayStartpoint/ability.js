class Ability {
	constructor(active) {
		this.sprite;
		this.animations = {};
		this.active = active;
		this.effect;
		this.damage;
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
	cast() {
		this.update();
	}
}
