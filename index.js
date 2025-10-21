let wallet=10




import {rps} from "./rps.js";

import {wq} from "./wq.js";

import {dq} from "./dq.js";

import {nq} from "./nq.js";









const resultArray =[];
 
let currentGame ="";

const playGame = () => {
 
const games = {
    rps,
    dq,
    nq,
    wq,
    

    
        
    }

}
;


    let gameResult ={};

    if (currentGame ) {
        gameResult = games[gameValue]();

     } else {
        const currentGame = window.prompt("choose your game");
        

        gameResult = games[currentGame]();

     }
     resultArray.push(gameResult);

     const playAgain = window.prompt(
        "Dahin togloh bol 1, menu bol 2"
     );

     if (playAgain === 1) {
        currentGame = "";
        return playGame();

    }
    else if (playAgain === 2){
        return playGame();
    }
    
;

playGame();
console.log(resultArray);








// const getStringValue = value => {
//     if (value === 1) {
//         return "Ug taah";
//     } else if (value === 2){
//         return "shoonii togloom";
//     } else if (value === 3)
//         return "too taah";
//     } else if (value === 4){
//         return "Garah"
//     }