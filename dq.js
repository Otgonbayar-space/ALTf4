export

const dq = () => {
  const getRandomNumberOne = () => {
    return Math.floor(Math.random() * 6) + 1
  }

  const getRandomNumberTwo = () => {
    return Math.floor(Math.random() * 6) + 1
  }
  startGAME ();
  If (getRandomNumberOne + getRandomNumberTwo === 7 && getRandomNumberOne + getRandomNumberTwo === 11)
  { window.alert("you win")
  }
  window.alert("you lost")

}

startGAME ();





