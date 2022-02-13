export default class Controller {
	constructor(game, view) {
		this.game = game;
		this.view = view;
		this.intervalId = null;
		this.isPlaying = false;




		document.addEventListener('keydown', this.handleKeyDown.bind(this));
		this.view.renderStartScreen();
	}

	update() {
		this.game.movePieceDown();
		this.updateView();
	}

	play() {
		this.isPlaying = true;
		this.startTimer();
		this.updateView();

	}

	pause() {
		this.isPlaying = false;
		this.stopTimer();
		this.updateView();
	}

	updateView() {
		if (!this.isPlaying) {
			this.view.renderPauseScreen();
		} else {
			this.view.renderMainScreen(this.game.getState());
		}
	}

	startTimer() {
		if (!this.intervalId) {
			this.intervalId = setInterval(() => {
				this.update();
			}, 1000);
		}
	}

	stopTimer() {
		if (this.intervalId) {
			clearInterval(this.intervalId);
			this.intervalId = null;
		}
	}

	handleKeyDown(event) {
		switch (event.keyCode) {
			case 13: //enter
				if (this.isPlaying) {
					this.pause();
				} else {
					this.play();
				}
				break;
			// this.view.renderMainScreen(this.game.getState());
			case 37: //left
				this.game.movePieceLeft();
				this.view.renderMainScreen(game.getState());
				break;
			case 38: //up arrow
				this.game.rotatePiece();
				this.view.renderMainScreen(game.getState());
				break;
			case 39: //right arrow
				this.game.movePieceRight();
				this.view.renderMainScreen(game.getState());
				break;
			case 40: // down arrow
				this.game.movePieceDown();
				this.view.renderMainScreen(game.getState());
				break;
		}
	}
}