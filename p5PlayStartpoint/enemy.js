// Should only contain information that is shared across ALL enemies
let enemyGroup;
let enemies = [];

class Enemy {
	constructor(health) {
		this.sprite
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
		enemyGroup = new Group();
		// Call in setup
		// Create sprite && set sprite settings
		this.sprite = createSprite(random(groundGroup).position.x,random(groundGroup).position.y-walls[0].height/2);
		// this.sprite.debug = true;
		this.sprite.addAnimation('idle', this.animations.idle);
		this.sprite.addAnimation('jump', this.animations.jump);
		this.sprite.addAnimation('run', this.animations.run);
		this.sprite.addAnimation('walk', this.animations.walk);
		enemyGroup.add(this.sprite);

	
	}
	update() {
this.movement();
		// Call in draw
		// Call controls && idle animation

	}
	idle() {}
	movement() {
		if (this.sprite.velocity.x<0.5 && this.sprite.velocity.x>-0.5 ){
			this.sprite.changeAnimation('run');
			this.sprite.mirrorX(Math.sign(this.sprite.velocity.x*-1));

		} else {
			this.sprite.changeAnimation('idle')
			this.sprite.mirrorX(Math.sign(this.sprite.velocity.x*-1));

		}
		if (this.sprite.bounce(enemyGroup)){
			this.sprite.position.x-=10;
		}
		this.sprite.bounce(walls)
		if (!this.sprite.collide(groundGroup)){
			this.sprite.velocity.y+=1;
		} else {
			this.sprite.velocity.y = 0;
		}
if (this.sprite.collide(testPlayer.sprite)){

		testPlayer.sprite.position.x+= (testPlayer.sprite.position.x-this.sprite.position.x)/abs(testPlayer.sprite.position.x-this.sprite.position.x)*10

		}
		if (testPlayer.lightning.sprite && this.sprite.collide(testPlayer.lightning.sprite) && !testPlayer.lightning.sprite.removed){
			this.sprite.remove();
		}
		if (abs(this.sprite.position.x - testPlayer.sprite.position.x) < CANVASWIDTH/resolution){
			this.sprite.velocity.x += CANVASWIDTH/resolution/(testPlayer.sprite.position.x-this.sprite.position.x)
		}
		this.sprite.limitSpeed(3)
	}
}

