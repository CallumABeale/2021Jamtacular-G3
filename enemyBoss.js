// Should only contain attributes and methods that ONLY the boss will have
class EnemyBoss extends Enemy {
	constructor(health) {
		// Use super to refer to attributes from the Enemy class
		super(health);
	}
	// Place methods that ONLY the boss will have below
	/**
	 * This movement method is an override method
	 */
	movement() {
		// Calling super.movement() will EXTEND the functionality of the Enemy.movement() method without having to recreate the entire method
		super.movement();
	}
}
