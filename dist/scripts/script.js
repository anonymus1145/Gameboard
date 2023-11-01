let Gameboard = {
    gameBoard : [],
    gameBoardLength : 0,
    gameBoardWidth : 0,

    limit : function() {
        if (this.gameBoard.length == this.gameBoardLength * this.gameBoardWidth) {
            this.gameBoard.pop(winner());
        }
    },
};

Gameboard.limit();