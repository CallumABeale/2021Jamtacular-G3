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
		this.animations.idle = loadAnimation('./img/enemy/idle.gif');
		this.animations.jump = loadAnimation('./img/enemy/jump.gif');
		this.animations.run = loadAnimation('./img/enemy/run.gif');
		this.animations.walk = loadAnimation('./img/enemy/walk.gif');

		this.animations.bossAttack = loadAnimation('./img/boss/attack.gif');
		this.animations.bossDeath = loadAnimation('./img/boss/death.gif');
		this.animations.bossIdle = loadAnimation('./img/boss/idle.gif');
		this.animations.bossTakeHit = loadAnimation('./img/boss/take-hit.gif');
		this.animations.bossWalk = loadAnimation('./img/boss/walk.gif');
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
