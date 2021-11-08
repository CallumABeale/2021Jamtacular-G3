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
	cast(playerX, playerY) {
		if (this.active === 'lightning') {
			this.lightning(playerX, playerY);
		}
		if (this.active === 'freeze') {
			this.freeze(playerX, playerY);
		}
		if (this.active === 'telekenesis') {
			this.telekenisis(playerX, playerY);
		}
	}
	lightning(x, y) {
		this.sprite = createSprite(x, y, 250, 30);
		setTimeout(this.kill(), 1000);
	}
	freeze(x, y) {
		this.sprite = createSprite(x, y, 10, 10);
	}
	telekenisis(x, y) {
		this.sprite = createSprite(x, y, 10, 10);
	}
	kill() {
		this.sprite.removed = true;
		console.log('sprite killed!');
	}
}
