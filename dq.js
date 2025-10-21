

  export const startGAME = () => {

  const getRandomNumberOne = () => {
    return Math.floor(Math.random() * 6) + 1
  }

  const getRandomNumberTwo = () => {
    return Math.floor(Math.random() * 6) + 1
  }

  If (getRandomNumberOne + getRandomNumberTwo === 7 && getRandomNumberOne + getRandomNumberTwo === 11)
  { window.alert("you win");

  }
  window.alert("you lost");

}

startGAME ();





