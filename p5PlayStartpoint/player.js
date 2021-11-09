class Player {
	constructor(health) {
		this.sprite;
		this.animations = {};
		this.health = health;
		this.lightning = new Ability('lightning');
		this.freeze = new Ability('freeze');
		this.telekenises = new Ability('telekenises');
		this.abilityList = [this.lightning, this.freeze, this.telekenises];
		this.activeAbility = this.lightning;
		this.itemList = [];
		this.activeItem;
	}
	p5Load() {
		// Call in preload
		// load images for animation
	}
	p5Init(x = width * 0.2, y = height * 0.8) {
		// Call in setup
		// Create sprite && set sprite settings
		this.sprite = createSprite(
			testSprite.position.x,
			testSprite.position.y,
			CANVASWIDTH / resolution / 5,
			CANVASHEIGHT / resolution / 1.5
		);
		this.sprite.friction = 0.1;
		// this.sprite.setCollider("circle", 0, 0, CANVASWIDTH/resolution/25)
		this.sprite.debug = true;

		this.sprite.jumpActive = true;
	}
	update() {
		// Call in draw
		// Call controls && idle animation
		if (keyIsDown(90) && camera.zoom > zoomLevel/resolution*3){
			camera.zoom*=0.95
		}

		if (this.sprite.collide(groundGroup)) {
			gravity = 1;
			if (this.sprite.touching.top) {
				this.sprite.position.y += 200 / resolution;
				this.sprite.velocity.y = 1;
			} else {
				if (this.sprite.touching.bottom) {
					this.sprite.jumpActive = true;
					this.sprite.velocity.y = 0;
				}
			}
		}

		if (
			this.sprite.collide(antiGrav) &&
			keyIsDown(32) &&
			this.sprite.touching.bottom
		) {
			this.sprite.jumpActive = false;
			gravity = -1;
		}

		if (this.sprite.collide(walls)) {
			if (gravity == -1) {
				gravity = 1;
			}
			if (this.sprite.touching.top) {
				this.sprite.position.y += 50 / resolution;
				this.sprite.velocity.y = 1;
			}
			if (this.sprite.touching.bottom) {
				this.sprite.velocity.y = 0;
				this.sprite.jumpActive = true;
			}
		}
		this.controls();
		if (int(this.sprite.velocity.x) === 0) {
			this.idle();
		}
	}
	idle() {
		// this.sprite.changeAnimation("standing")
	}
	castAbility() {
		this.activeAbility.cast(this.sprite.position.x, this.sprite.position.y);
	}
	cycleAbility() {
		if (this.abilityList.includes(this.activeAbility)) {
			let index = this.abilityList.indexOf(this.activeAbility);
			if (index === this.abilityList.length - 1) {
				this.activeAbility = this.abilityList[0];
			} else {
				this.activeAbility = this.abilityList[index + 1];
			}
		}
	}
	useItem() {}
	cycleItem() {}
	controls() {
		/**
		 * always applying gravity
		 */
		if (!this.sprite.collide(groundGroup)) {
			this.sprite.velocity.y += gravity;
		}

		/**
		 * If LEFT_ARROW is pressed, move left
		 */
		if (keyIsDown(LEFT_ARROW)) {
			// this.sprite.changeAnimation("moving")
			this.sprite.mirrorX(Math.sign(this.sprite.velocity.x));
			this.sprite.velocity.x -= 0.5;
		}
		/**
		 * If RIGHT_ARROW is pressed, move right
		 * If SHIFT is pressed, it will move twice as fast
		 */
		if (keyIsDown(RIGHT_ARROW)) {
			// this.sprite.changeAnimation("moving")
			this.sprite.mirrorX(Math.sign(this.sprite.velocity.x));
			this.sprite.velocity.x += 0.5;
		}
		/**
		 * If UP_ARROW is pressed, jump
		 */
		if (
			keyIsDown(32) &&
			!this.sprite.collide(antiGrav) &&
			!this.sprite.touching.bottom
		) {
			if (this.sprite.jumpActive == true && this.sprite.velocity.y < 2) {
				this.sprite.velocity.y = -groundGroup[0].height / 1.25;
				this.sprite.jumpActive = false;
			}
		}
		/**
		 * If Q is pressed, use ability
		 */
		if (keyWentDown(81)) {
			this.castAbility();
		}
		/**
		 * If E is pressed, use item
		 */
		if (keyWentDown(69)) {
			this.useItem();
		}
		/**
		 * If R is pressed, cycle ability
		 */
		if (keyWentDown(82)) {
			this.cycleAbility();
		}
		if (keyWentDown(70)) {
			this.cycleItem();
		}
	}
}
