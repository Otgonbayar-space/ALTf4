export
    
    const rps = () => {
        
    }


let playAgain = 1;

const getRandomNumber = () => {
  return Math.floor(Math.random() * 3) + 1;
};

const getStringValue = value => {
  if (value === 1) {
    return "scissors";
  } else if (value === 2) {
    return "rock";
  }

  return "paper";
};

const printResult = (userValue, computerValue) => {
  const userStringValue = getStringValue(userValue);
  const computerStringValue = getStringValue(computerValue);

  return `user: ${userStringValue} computer: ${computerStringValue}`;
};

const endGameAnswer = () => {
  const endGame = Number(
    window.prompt("Togloomiig zogsooh bol 0 urgejluuhel 1")
  );

  if (endGame !== 0) {
    startGame();
  }
};

const startGame = () => {
  const userValueString = window.prompt("1 scissors, 2 rock, 3 paper");

  const userValueInt = Number(userValueString);

  const computerValue = getRandomNumber();

  if (userValueInt === computerValue) {
    window.alert("Draw!", printResult(userValueInt, computerValue));

    endGameAnswer();
  } else if (userValueInt === 1 && computerValue === 3) {
    window.alert("You win!" + printResult(userValueInt, computerValue));
    endGameAnswer();
    wallet++;
  } else if (userValueInt === 2 && computerValue === 1) {
    window.alert("You win!" + printResult(userValueInt, computerValue));
    endGameAnswer();
    wallet++;
  } else if (userValueInt === 3 && computerValue === 2) {
    window.alert("You win!" + printResult(userValueInt, computerValue));
    endGameAnswer();
    wallet++;
  } else {
    window.alert("You lost!" + printResult(userValueInt, computerValue));
    endGameAnswer();
    wallet--;
  }
};

startGame();