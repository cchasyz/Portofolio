document.addEventListener("DOMContentLoaded", () => {
  const welcomeScreen = document.getElementById("welcome-screen");
  const gameBoard = document.getElementById("game-board");
  const startGameBtn = document.getElementById("start-game");
  const playerVsBot = document.getElementById("player-vs-bot");
  const playerVsPlayer = document.getElementById("player-vs-player");
  const playerNames = document.getElementById("player-names");
  const player1Input = document.getElementById("player1-name");
  const player2Input = document.getElementById("player2-name");
  const hexBoard = document.getElementById("hex-board");
  let selectedLevel = "";
  let isPvP = false;
  let currentPlayer = "red";
  let gameGrid = [];
  
  document.querySelectorAll("input[name='level']").forEach(radio => {
      radio.addEventListener("change", (e) => {
          selectedLevel = e.target.value;
          checkStartButton();
      });
  });
  
  playerVsBot.addEventListener("click", () => {
      isPvP = false;
      playerNames.style.display = "none";
      checkStartButton();
  });
  
  playerVsPlayer.addEventListener("click", () => {
      isPvP = true;
      playerNames.style.display = "block";
      checkStartButton();
  });
  
  [player1Input, player2Input].forEach(input => {
      input.addEventListener("input", checkStartButton);
  });
  
  function checkStartButton() {
      if (selectedLevel && (!isPvP || (player1Input.value && player2Input.value))) {
          startGameBtn.disabled = false;
      } else {
          startGameBtn.disabled = true;
      }
  }
  
  startGameBtn.addEventListener("click", () => {
      welcomeScreen.style.display = "none";
      gameBoard.style.display = "block";
      generateHexBoard();
  });
  
  function generateHexBoard() {
      hexBoard.innerHTML = "";
      gameGrid = [];
      for (let row = 0; row < 10; row++) {
          let rowArray = [];
          for (let col = 0; col < 8; col++) {
              const hex = document.createElement("div");
              hex.classList.add("hex");
              hex.dataset.row = row;
              hex.dataset.col = col;
              hex.addEventListener("click", () => placeHexagon(hex));
              hexBoard.appendChild(hex);
              rowArray.push(null);
          }
          gameGrid.push(rowArray);
      }
  }
  
  function placeHexagon(hex) {
      if (!hex.classList.contains("occupied")) {
          let number = Math.floor(Math.random() * 20) + 1;
          hex.textContent = number;
          hex.classList.add("occupied", currentPlayer);
          let row = parseInt(hex.dataset.row);
          let col = parseInt(hex.dataset.col);
          gameGrid[row][col] = { color: currentPlayer, value: number };
          captureAdjacentHexagons(row, col, number);
          currentPlayer = currentPlayer === "red" ? "blue" : "red";
      }
  }
  
  function captureAdjacentHexagons(row, col, number) {
      const directions = [
          [-1, 0], [1, 0], [0, -1], [0, 1], [-1, 1], [1, -1]
      ];
      directions.forEach(([dx, dy]) => {
          let newRow = row + dx;
          let newCol = col + dy;
          if (newRow >= 0 && newRow < 10 && newCol >= 0 && newCol < 8) {
              let adjacentHex = gameGrid[newRow][newCol];
              if (adjacentHex && adjacentHex.color !== currentPlayer && adjacentHex.value < number) {
                  let hexElement = document.querySelector(`.hex[data-row='${newRow}'][data-col='${newCol}']`);
                  hexElement.classList.remove("red", "blue");
                  hexElement.classList.add(currentPlayer);
                  gameGrid[newRow][newCol].color = currentPlayer;
              }
          }
      });
  }
});