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
		this.sprite = createSprite((endPos.x+0.5)*CANVASWIDTH/resolution, (endPos.y+0.5)*CANVASHEIGHT/resolution,CANVASWIDTH/resolution/5,CANVASHEIGHT/resolution/2.5);
		this.sprite.friction = 0.1;
		this.sprite.jumpActive = false;
	}
	update() {
		// Call in draw
		// Call controls && idle animation
		if (this.sprite.collide(groundGroup)){
			this.sprite.jumpActive=true;
		}
		this.sprite.collide(roofGroup);
		this.sprite.collide(walls);

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
		this.sprite.velocity.y+=0.3
		
		
		/**
		 * If LEFT_ARROW is pressed, move left
		 */
		if (keyIsDown(LEFT_ARROW)) {
			// this.sprite.changeAnimation("moving")
			// this.sprite.mirrorX(Math.sign(this.sprite.velocity.x));
			this.sprite.velocity.x-=.5;
		}
		/**
		 * If RIGHT_ARROW is pressed, move right
		 */
		if (keyIsDown(RIGHT_ARROW)) {
			// this.sprite.changeAnimation("moving")
			// this.sprite.mirrorX(Math.sign(this.sprite.velocity.x));
			this.sprite.velocity.x+=.5;
		}
		/**
		 * If UP_ARROW is pressed, jump
		 */
		if (keyIsDown(UP_ARROW) && this.sprite.jumpActive == true) {
			this.sprite.velocity.y =-10;
			this.sprite.jumpActive = false;
		}
		/**
		 * If Q is pressed, use ability
		 */
		if (keyIsDown(keyCode === 81)) {
			this.castAbility();
		}
		/**
		 * If E is pressed, use item
		 */
		if (keyIsDown(keyCode === 69)) {
			this.useItem();
		}
		/**
		 * If R is pressed, cycle ability
		 */
		if (keyIsDown(keyCode === 82)) [this.cycleAbility()];
		if (keyIsDown(keyCode === 70)) {
			this.cycleItem();
		}
	}
}
