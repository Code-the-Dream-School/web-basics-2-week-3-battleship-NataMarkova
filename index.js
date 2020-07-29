const battleship = () => {

  // create objects with the given parametrs
  let playerOne = {
    name: "",
    shipCount: 0,
    gameBoard: []
  }
  let playerTwo = {
    name: "",
    shipCount: 0,
    gameBoard: []
  };

  // asking for the players' name
  playerOne.name = prompt("Player 1 what is your name?");
  playerTwo.name = prompt("Player 2 what is your name?");

  // creating game boards
  let boardColumn = 4;
  const buildBoard = player => {
    for (let i = 0; i < boardColumn; i++) {
      let boardRow = []
      for (let j = 0; j < boardColumn; j++) {
        boardRow.push(0)
      }
      player.gameBoard.push(boardRow);
    }
  }
  buildBoard(playerOne);
  buildBoard(playerTwo);
  console.log("Test", playerTwo.gameBoard);


  // randomly add ships to each board
  const shipPlace = (player) => {
    let x = Math.floor(Math.random() *4)
      let y = Math.floor(Math.random() *4)
      if (player.gameBoard[x][y] === 1) {
          return
      } else {
        player.gameBoard[x][y]= 1;
        player.shipCount++;
      } 
    }
  
  while(playerOne.shipCount < 4) {
    shipPlace(playerOne);
  }

  while(playerTwo.shipCount < 4) {
    shipPlace(playerTwo);
  }

// for debuggin purpose to see player's board in the console 
  console.log("Player 1 " + JSON.stringify(playerOne.gameBoard));
  console.log("Player 2 " + JSON.stringify(playerTwo.gameBoard));

  // create a new variable and assign it to the playerOne value
  let currentPlayer = playerOne;
  
  // create a new variable and assign it to the playerTwo value
  let opponent = playerTwo;
  
  // ask the player to choose strike coordinates
  while(playerOne.shipCount > 0 && playerTwo.shipCount > 0) {
    
    let xChoice  = prompt("Please provide your x coordinate choice");
    let yChoice  = prompt("Please provide your y coordinate choice");
    
  //  check the opponent's board to see if the space at those indices is equal to 1
    if (opponent.gameBoard[xChoice][yChoice] === 1) {
      opponent.gameBoard[xChoice][yChoice] = 0;
      opponent.shipCount--;
      alert("Hit!");
    } else {
      alert("Miss!");
    }
    // change the player's turn
    [currentPlayer, opponent] = [opponent, currentPlayer];
    

    // for debuggin purpose to see player's sunk ships in the console 
    console.log("Player 1 " + JSON.stringify(playerOne.gameBoard));
    console.log("Player 2 " + JSON.stringify(playerTwo.gameBoard));
  }
  return `The winner is ${currentPlayer.name}`;
}

const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult;
