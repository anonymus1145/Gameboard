//Game Board
const gamepad = {
  gameBoard: [],
};
// Player Object
const player = {
  markedCells: [],
  type: "",
  symbol: "",
  alertWin: function () {
    alert(this.type + "win!");
  },
  random: function () {
    return Math.floor(Math.random() * 9);
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
    player1.type = "Player";
    player1.symbol = "X";

    const player2 = Object.create(player);
    player2.type = "Player";
    player2.symbol = "O";


    for (let i = 0; i <= 9; i++) {
      document.addEventListener("click", (event) => {
        if (event.target === document.getElementById("square" + [i])) {
          player1.markedCells.push("square" + [i]);
          gamepad.gameBoard.push("square" + [i]);

          document.getElementById("square" + [i]).innerHTML = player1.symbol;

          console.log("square" + [i]);
          console.log(gamepad.gameBoard);
          console.log(player1.markedCells);
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