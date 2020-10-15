const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Oops');
    }
  };
  
  const getComputerChoice = () => {
    let compNum = Math.floor(Math.random() * 3);
    if (compNum === 0) {
      return 'rock';
    } else if (compNum === 1) {
      return 'paper';
    } else if (compNum === 2) {
      return 'scissors';
    } else {
      console.log('Something went wrong...');
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
      return 'The game was a tie';
    } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer won';
      } else {
        return 'User won';
      }
    } else if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        return 'User won';
      } else {
        return 'Computer won';
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer won';
      } else {
        return 'User won';
      }
    } else if (userChoice === 'bomb') {
      return 'User won';
    } else {
      return 'Ouch';
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log(`You threw ${userChoice}.`);
    console.log(`Computer threw ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
  