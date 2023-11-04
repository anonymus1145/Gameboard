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
    return Math.floor(Math.random() * 9) + 1;
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
  const playButton = document.getElementById("play");
  playButton.disabled = true;
  dialog.showModal();
  start();
}

// Start Game
function start() {
  const pVp = document.getElementById("pVp");
  const pVc = document.getElementById("pVc");

  const player1 = Object.create(player);
  player1.type = prompt("Insert your name: ");
  player1.symbol = "X";
  player1.markedCells = [];


  // Player vs Player

  pVp.addEventListener("click", () => {
    dialog.close();

    const player2 = Object.create(player);
    player2.type = prompt("Player 2 insert your name: ");
    player2.symbol = "O";
    player2.markedCells = [];

    let currentPlayer = "Player";

    for (let i = 0; i <= 9; i++) {
      document.addEventListener("click", (event) => {
        if (event.target === document.getElementById("square" + [i])) {
          if (currentPlayer === "Player") {
            player1.markedCells.push("square" + [i]);
            gamepad.gameBoard.push("square" + [i]);
            document.getElementById("square" + [i]).innerText = player1.symbol;
            currentPlayer = "Player 2";
            if (player1.winCombo() === true) {
              setTimeout(() => {
                location.reload();
                player1.alertWin();
              }, 1000);
            } else if (gamepad.isFull() === true) {
              setTimeout(() => {
                location.reload();
                alert("We have a draw!");
              }, 1000);
            }
          } else {
            player2.markedCells.push("square" + [i]);
            gamepad.gameBoard.push("square" + [i]);
            document.getElementById("square" + [i]).innerText = player2.symbol;
            currentPlayer = "Player";
            if (player2.winCombo() === true) {
              setTimeout(() => {
                location.reload();
                player2.alertWin();
              }, 1000);
            }
          }
        }
      })
    }
  })


  // Player vs Computer

  pVc.addEventListener("click", () => {
    dialog.close();

    const computer = Object.create(player);
    computer.type = "Computer";
    computer.symbol = "O";
    computer.markedCells = [];

    let computerMove = computer.random();

    for (let i = 0; i <= 9; i++) {
      // Player turn
      document.addEventListener("click", (event) => {
        if (event.target === document.getElementById("square" + [i])) {
          player1.markedCells.push("square" + [i]);
          gamepad.gameBoard.push("square" + [i]);
          document.getElementById("square" + [i]).innerHTML = player1.symbol;

          if (player1.winCombo() === true) {
            setTimeout(() => {
              location.reload();
              player1.alertWin();
            }, 1000);
          } else if (gamepad.isFull() === true) {
            setTimeout(() => {
              location.reload();
              alert("We have a draw!");
            }, 1000);
          }
          // Computer turn 
          while (gamepad.gameBoard.includes("square" + computerMove)) {
            computerMove = computer.random();
          }
          computer.markedCells.push("square" + computerMove);
          gamepad.gameBoard.push("square" + computerMove);
          setTimeout(() => {
            document.getElementById("square" + computerMove).innerHTML = computer.symbol;
          }, 1000); // Add a delay of 1 second before displaying the computer's move
          currentPlayer = "Player";

          if (computer.winCombo() === true) {
            setTimeout(() => {
              location.reload();
              computer.alertWin();
            }, 1000);
          }
        }
      })
    }
  })
  player1.markedCells = [];
  computer.markedCells = [];
  gamepad.gameBoard = [];
}
