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
		if (this.sprite){
			this.sprite.position.x = testPlayer.sprite.position.x;
			this.sprite.position.y = testPlayer.sprite.position.y;
		}
	}
	cast(playerX, playerY) {
		if (this.active === 'lightning') {
			this.lightning(playerX, playerY);
		}
		if (this.active === 'freeze') {
			this.freeze(playerX, playerY);
		}
		if (this.active === 'telekenises') {
			this.telekenisis(playerX, playerY);
		}
	}
	lightning(x, y) {
		this.sprite = createSprite(x, y, 250, 30);
		this.sprite.life = 60;
		if (this.sprite.life > 0) {
			this.sprite.life -= 1;
		}
	}
	freeze(x, y) {
		this.sprite = createSprite(x, y, 10, 10);
		this.sprite.life = 60;
		if (this.sprite.life > 0) {
			this.sprite.life -= 1;
		}
	}
	telekenisis(x, y) {
		this.sprite = createSprite(x, y, 10, 250);
		this.sprite.life = 60;
		if (this.sprite.life > 0) {
			this.sprite.life -= 1;
		}
	}
}
