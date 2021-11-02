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
		this.sprite = createSprite(x, y);
		this.sprite.friction = 0.1;
	}
	update() {
		// Call in draw
		// Call controls && idle animation
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
		 * If LEFT_ARROW is pressed, move left
		 */
		if (keyIsDown(LEFT_ARROW)) {
			// this.sprite.changeAnimation("moving")
			this.sprite.mirrorX(Math.sign(sprite.velocity.x));
			this.sprite.velocity.x--;
		}
		/**
		 * If RIGHT_ARROW is pressed, move right
		 */
		if (keyIsDown(RIGHT_ARROW)) {
			// this.sprite.changeAnimation("moving")
			this.sprite.mirrorX(Math.sign(sprite.velocity.x));
			this.sprite.velocity.x++;
		}
		/**
		 * If Space is pressed, jump
		 */
		if (keyIsDown(Space)) {
			this.sprite.velocity.y += 5;
		}
		/**
		 * If Q is pressed, use ability
		 */
		if (keyIsDown(keyCode === KeyQ)) {
			this.castAbility();
		}
		/**
		 * If E is pressed, use item
		 */
		if (keyIsDown(keyCode === KeyE)) {
			this.useItem();
		}
		/**
		 * If R is pressed, cycle ability
		 */
		if (keyIsDown(keyCode === KeyR)) [this.cycleAbility()];
		if (keyIsDown(keyCode === keyF)) {
			this.cycleItem();
		}
	}
}
