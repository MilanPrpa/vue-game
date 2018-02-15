new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false
	},

	methods: {
		startGame: function() {
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
		},
		damageCalc: function(min, max) {
			return Math.max(Math.floor(Math.random() * max) + 1, min)
		},
		attack: function() {
			this.monsterHealth -= this.damageCalc(3, 10)
			if (this.checkWin()) {
				return;
			}

			this.playerHealth -= this.damageCalc(5, 12);
			this.checkWin();
		},
		special: function() {
			this.monsterHealth -= this.damageCalc(10,20);
			if (this.checkWin()) {
				return;
			}
			this.playerHealth -= this.damageCalc(5, 12);
			this.checkWin();
		},
		heal: function() {
			this.playerHealth += this.damageCalc(6, 15)
		},
		quit: function() {

		},
		checkWin: function() {
			if (this.monsterHealth <= 0) {
				if (confirm('you won, new game?')) {
					this.startGame()
				} else {
					this.gameIsRunning = false;
				}
				return true;
			} else if (this.playerHealth <= 0) {
				if (confirm('you lost, new game?')) {
					this.startGame()
				} else {
					this.gameIsRunning = false;
				} 
				return true;
			}
				return false;
		}
	}
})



