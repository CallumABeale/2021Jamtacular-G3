class Item {
	constructor(active, effect) {
		this.sprite;
		this.animations = {};
		this.active = active;
		this.effect = effect;
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
	use() {
		// Call this function to use an item
		if (this.active === 'newItem') {
			this.itemGranter();
		}
		if (this.active === 'hpPotion') {
			this.healthPotion();
		}
		if (this.active === 'maxHP') [this.maxHealthPotion()];
		if (this.active === 'manaPotion') {
			this.manaPotion();
		}
		if (this.active === 'maxMana') {
			this.maxManaPotion();
		}
	}
	healthPotion() {
		const restoreAmount = 30;
		if (testPlayer.health < testPlayer.maxHealth) {
			if (testPlayer.health + restoreAmount > testPlayer.maxHealth) {
				testPlayer.health = testPlayer.maxHealth;
			} else {
				testPlayer.health += restoreAmount;
			}
		}
	}
	maxHealthPotion() {
		const maxHealthAdd = 50;
		testPlayer.healh += maxHealthAdd;
	}
	manaPotion() {
		const restoreAmount = 30;
		if (testPlayer.mana < testPlayer.maxMana) {
			if (testPlayer.mana + restoreAmount > testPlayer.maxHealth) {
				testPlayer.mana = testPlayer.maxMana;
			} else {
				testPlayer.mana += restoreAmount;
			}
		}
	}
	maxManaPotion() {
		const maxManaAdd = 50;
		testPlayer.mana += maxManaAdd;
	}
	itemGranter() {}
}
