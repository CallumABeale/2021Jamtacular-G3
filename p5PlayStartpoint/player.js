class Player {
	constructor(health) {
		this.sprite;
		this.animations = {};
		this.health = health;
		this.activeAbility;
		this.abillityList = [];
		this.activeItem;
		this.itemList = [];
	}
	p5Load() {
		// Call in preload
		// load images for animation
	}
	p5Init(x = width * 0.2, y = height * 0.8) {
		// Call in setup
		// Create sprite && set sprite settings
		this.sprite = createSprite((testSprite.position.x), (testSprite.position.y),CANVASWIDTH/resolution/10,CANVASHEIGHT/resolution/5);
		this.sprite.friction = 0.1;
		// this.sprite.setCollider("circle", 0, 0, CANVASWIDTH/resolution/25)
		this.sprite.debug = true;

		this.sprite.jumpActive = true;
	}
	update() {
		// Call in draw
		// Call controls && idle animation
		if (this.sprite.collide(groundGroup) && this.sprite.touching.bottom){
			this.sprite.jumpActive=true;
			this.sprite.velocity.y = 0;
		}
		if (this.sprite.collide(groundGroup) && this.sprite.touching.top){
			this.sprite.velocity.y += .5;
		}
		this.sprite.collide(walls)

		this.controls();
		if (int(this.sprite.velocity.x) === 0) {
			this.idle();
		}
	}
	idle() {
		// this.sprite.changeAnimation("standing")
	}
	castAbility() {}
	cycleAbility() {
		if (abilityList.includes(activeAbility)) {
			let index = abilityList.indexOf(activeAbility);
			if (index === abilityList.length - 1) {
				activeAbility = abilityList[0];
			} else {
				activeAbility = abilityList[index + 1];
			}
		}
	}
	useItem() {}
	cycleItem() {}
	controls() {
		/**
		 * always applying gravity
		 */
		if (!this.sprite.collide(groundGroup)){
		this.sprite.velocity.y+=1
		}
		
		/**
		 * If LEFT_ARROW is pressed, move left
		 */
		if (keyIsDown(LEFT_ARROW)&& !this.sprite.touching.left) {
			// this.sprite.changeAnimation("moving")
			if (keyIsDown(16)) {
				this.sprite.velocity.x-=1;
			}
			this.sprite.mirrorX(Math.sign(this.sprite.velocity.x));
			this.sprite.velocity.x-=.5;
		}
		/**
		 * If RIGHT_ARROW is pressed, move right
		 * If SHIFT is pressed, it will move twice as fast
		 */
		if (keyIsDown(RIGHT_ARROW)&& !this.sprite.touching.right) {
			if (keyIsDown(16)) {
				this.sprite.velocity.x+=1;
			}
			// this.sprite.changeAnimation("moving")
			this.sprite.mirrorX(Math.sign(this.sprite.velocity.x));
			this.sprite.velocity.x+=.5;
		}
		/**
		 * If UP_ARROW is pressed, jump
		 */
		if (keyIsDown(32)) {
			if (this.sprite.jumpActive == true){
			this.sprite.velocity.y =-30;
			this.sprite.jumpActive = false;
			}
		}
		/**
		 * If Q is pressed, use ability
		 */
		if (keyIsDown(81)) {
			this.castAbility();
		}
		/**
		 * If E is pressed, use item
		 */
		if (keyIsDown(69)) {
			this.useItem();
		}
		/**
		 * If R is pressed, cycle ability
		 */
		if (keyIsDown(82)) [this.cycleAbility()];
		if (keyIsDown(70)) {
			this.cycleItem();
		}
	}
}
