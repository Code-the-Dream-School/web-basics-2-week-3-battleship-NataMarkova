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
    let shipCountFinal = 4;
  
    // add game board with 0
    for (let i = 0; i < boardColumn; i++) {
      let boardRow = []
      for (let j = 0; j < boardColumn; j++) {
        boardRow.push(0)
      }
  
  
  // add rows to the end of an empty list
      playerOne.gameBoard.push(boardRow);
      playerTwo.gameBoard.push(boardRow);
    }
    console.log("Test", playerTwo.gameBoard);
  
    // randomly add ships to each board
    const shipPlace = (player) => {
      let x = Math.floor(Math.random() * 4)
      let y = Math.floor(Math.random() * 4)
      console.log(x);
      console.log(y);
      if (player.gameBoard[x][y] === 1) {
        // return
      } else {
        player.gameBoard[x][y] = 1;
        player.shipCount++;
      }
    }
  
    // a while loop that runs until 4 ships have been added to the board 
    while(playerOne.shipCount < shipCountFinal) {
      shipPlace(playerOne);
    }
    while(playerTwo.shipCount < shipCountFinal) {
      shipPlace(playerTwo);
    }
  
  // for debuggin purpose to see player's board in the console 
    console.log("Player 1 " + JSON.stringify(playerOne.gameBoard));
    console.log("Player 2 " + JSON.stringify(playerTwo.gameBoard));
  
    // create a new let and assign it to the playerOne value
    let currentPlayer = playerOne;
    
    // ask the player to choose strike coordinates
    while(playerOne.shipCount > 0 && playerTwo.shipCount > 0) {
      let xChoice  = prompt("Please provide your x coordinate choice");
      let yChoice  = prompt("Please provide your y coordinate choice");
      let opponent;
      if (currentPlayer === playerOne) {
        opponent = playerTwo;
      } else {
        opponent = playerOne;
      }
    //  check the opponent's board to see if the space at those indices is aequal to 1
      if (opponent.gameBoard[xChoice][yChoice] === 1) {
        opponent.gameBoard[xChoice][yChoice] = 0;
        opponent.shipCount--;
        alert("Hit!");
      } else {
        alert("Miss!");
      }
  
      // for debuggin purpose to see player's sunk ships in the console 
      console.log("Player 1 " + JSON.stringify(playerTwo.gameBoard));
      console.log("Player 2 " + JSON.stringify(playerTwo.gameBoard));
    }
  
    // if playerOne.shipCount === 0 --> opponent wins and vs
    let winner;
    if (playerOne.shipCount === 0) {
      winner = playerTwo;
    } else {
      winner = playerOne;
    }
    return `The winner is ${winner.name}`;
  }
  
  const gameResult = battleship()
  
  const htmlTarget = document.getElementById('result')
  htmlTarget.innerHTML = gameResult;
  