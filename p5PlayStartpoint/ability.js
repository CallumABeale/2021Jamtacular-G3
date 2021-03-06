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
		if (this.sprite) {
			// Force lightning to be based on CURRENT player direction
			if (this.active === 'lightning') {
				if (testPlayer.sprite.getDirection() < 90 && testPlayer.sprite.getDirection() >-180)  {
					this.sprite.position.x =
						testPlayer.sprite.position.x + 100 - this.sprite.life * 2;
					this.sprite.position.y = testPlayer.sprite.position.y+30;
				} else {
					this.sprite.position.x =
						testPlayer.sprite.position.x - 100 + this.sprite.life * 2;
					this.sprite.position.y = testPlayer.sprite.position.y+30;
				}
			}
			if (this.active === 'freeze') {
			}
			if (this.active === 'telekenises') {
			}
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
		this.sprite.addAnimation('fire', lightningAnim);
		this.sprite.scale = 0.2;
		this.sprite.life = 20;
		if (this.sprite.life > 0) {
			this.sprite.life -= 1;
		}
	}
	freeze(x, y) {
		this.sprite = createSprite(x, y+75, 10, 10);
		this.sprite.life = 60;
		if (this.sprite.life > 0) {
			this.sprite.life -= 1;
		}
	}
	telekenisis(x, y) {
		this.sprite = createSprite(x, y, 10, 250);
		this.sprite.life = 60;
		// if (this.sprite.displace(enemyGroup)) {
		// 	enemyGroup.velocity == player velocity
		// }
		if (this.sprite.life > 0) {
			this.sprite.life -= 1;
		}
	}
}
