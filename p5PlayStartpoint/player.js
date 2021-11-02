class Player {
	constructor() {
		this.sprite;
		this.animations = {};
		this.health;
		this.activeAbility;
		this.abillityList = {};
		this.activeItem;
		this.itemList = {};
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
	controls() {
		// will contain use item / ability
		// w/d && <- -> for movement
		// spacebar for jump
	}
}
