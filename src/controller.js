export default class Controller {
	constructor(game, view) {
		this.game = game;
		this.view = view;

		setInterval(() => {
			this.update();
		}, 1000);

		document.addEventListener('keydown', this.handleKeyDown.bind(this));
		this.view.renderStartScreen();
	}

	update() {
		this.game.movePieceDown();
		this.view.renderMainScreen(this.game.getState());
	}

	handleKeyDown(event) {
		switch (event.keyCode) {
			case 13: //enter
				this.view.renderMainScreen(this.game.getState());
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