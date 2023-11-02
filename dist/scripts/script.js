//Game Board
const gamepad = {
  gameBoard: [],
};
// Player Object
const player = {
  markedCells: 0,
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
function play() {
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
  })

}