const DICE =() => {
 
 const shoo1 = Math.floor(Math.random() * 6) + 1;
  const shoo2 = Math.floor(Math.random() * 6) + 1;

  const sum = shoo1 + shoo2;

  if (sum === 7 || sum === 11) {
    return {
      isWin: true,
      name: "dice",
      metadata: {
        shoo1,
        shoo2
      }
    };
  } else {
    return {
      isWin: false,
      name: "dice",
      metadata: {
        shoo1,
        shoo2
      }
    };
  }
}

const shooniifunc = () => {
   const shooniibtn = document.getElementById("dicedarahad" );
   shooniibtn.innerHTML = `<button id="dicetogloh">shoo hayh</button>`
}
const diceuzeh = document.getElementById("dicetogloh");
diceuzeh.addEventListener("click", DICE);






document.getElementById('wordgmame');
document.getElementById('numbergame');
document.getElementById('rockpapergame');
const shoo = document.getElementById('dicegame');

shoo.addEventListener("click", shooniifunc)