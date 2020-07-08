const battleship = () => {

  // create objects with the given parametrs
  let playerOne = {
    name: "playerOne",
    shipCount: 0,
    gameBoard: [
      [0, 0, 0, 0], 
      [0, 0, 0, 0], 
      [0, 0, 0, 0], 
      [0, 0, 0, 0]
    ]
  }
  let playerTwo = {
    name: "playerTwo",
    shipCount: 0,
    gameBoard: [
      [0, 0, 0, 0], 
      [0, 0, 0, 0], 
      [0, 0, 0, 0], 
      [0, 0, 0, 0]
    ]
  };

  // asking for the players' name
  playerOne.name = prompt("Player 1 what is your name?");
  playerTwo.name = prompt("Player 2 what is your name?");
  
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
    
  //  check the opponent's board to see if the space at those indices is aequal to 1
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
