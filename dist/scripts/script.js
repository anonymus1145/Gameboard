//Game Board
const gamepad = {
  gameBoard: [],
  isFull: function () {
    if (this.gameBoard.length === 9) {
      alert("Game is Over!");
      return true;
    } else {
      return false;
    }
  }
};
// Player Object
const player = {
  markedCells: [],
  type: "",
  symbol: "",
  alertWin: function () {
    alert(this.type + " win!");
  },
  random: function () {
    return Math.floor(Math.random() * 9);
  },
  winCombo: function () {
    if (
      this.markedCells.includes("square1") &&
      this.markedCells.includes("square2") &&
      this.markedCells.includes("square3")
    ) {
      return true;
    } else if (
      this.markedCells.includes("square4") &&
      this.markedCells.includes("square5") &&
      this.markedCells.includes("square6")
    ) {
      return true;
    } else if (
      this.markedCells.includes("square7") &&
      this.markedCells.includes("square8") &&
      this.markedCells.includes("square9")
    ) {
      return true;
    } else if (
      this.markedCells.includes("square1") &&
      this.markedCells.includes("square4") &&
      this.markedCells.includes("square7")
    ) {
      return true;
    } else if (
      this.markedCells.includes("square2") &&
      this.markedCells.includes("square5") &&
      this.markedCells.includes("square8")
    ) {
      return true;
    } else if (
      this.markedCells.includes("square3") &&
      this.markedCells.includes("square6") &&
      this.markedCells.includes("square9")
    ) {
      return true;
    } else if (
      this.markedCells.includes("square1") &&
      this.markedCells.includes("square5") &&
      this.markedCells.includes("square9")
    ) {
      return true;
    } else if (
      this.markedCells.includes("square3") &&
      this.markedCells.includes("square5") &&
      this.markedCells.includes("square7")
    ) {
      return true;
    } else {
      return false;
    }
  },
};

// Modal
function ask() {
  const showModal = document.getElementById("dialog");
  dialog.showModal();
  start();
}

// Start Game
function start() {
  const pVp = document.getElementById("pVp");
  const pVc = document.getElementById("pVc");


  // Player vs Player

  pVp.addEventListener("click", () => {
    dialog.close();

    const player1 = Object.create(player);
    player1.type = "Player 1";
    player1.symbol = "X";

    const player2 = Object.create(player);
    player2.type = "Player 2";
    player2.symbol = "O";

    let currentPlayer = "Player 1";

    for (let i = 0; i <= 9; i++) {
      document.addEventListener("click", (event) => {
        if (event.target === document.getElementById("square" + [i])) {
          if (currentPlayer === "Player 1") {
            player1.markedCells.push("square" + [i]);
            gamepad.gameBoard.push("square" + [i]);
            document.getElementById("square" + [i]).innerHTML = player1.symbol;
              if (gamepad.isFull() === true) {
                if (player1.winCombo() === true) {
                  player1.alertWin();
                }
              }
          } else {
            player2.markedCells.push("square" + [i]);
            gamepad.gameBoard.push("square" + [i]);
            document.getElementById("square" + [i]).innerHTML = player2.symbol;
              if (gamepad.isFull() === true) {
                if (player2.winCombo() === true) {
                  player2.alertWin();
                }
              } 
          }
          
          if (currentPlayer === "Player 1") {
            currentPlayer = "Player 2";
          } else {
            currentPlayer = "Player 1";
          }
        }
      })
    }
  })


  // Player vs Computer

  pVc.addEventListener("click", () => {
    dialog.close();

    const player1 = Object.create(player);
    player1.type = "Player";
    player1.symbol = "X";

    const computer = Object.create(player);
    computer.type = "Computer";
    computer.symbol = "O";

    for (let i = 0; i <= 9; i++) {
      if (i % 2 === 0) {
        document.addEventListener("click", (event) => {
          if (event.target === document.getElementById("square" + [i])) {
            player1.markedCells++;
            document.getElementById("square" + [i]).innerHTML = player1.symbol;
          }
        })
      } else {
        computer.markedCells++;
        let random = computer.random();
        document.getElementById("square" + [random]).innerHTML = computer.symbol;
      }
    }
  })
}