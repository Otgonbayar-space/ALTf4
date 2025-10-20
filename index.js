import {rps} from "./rps.js";

import {wq} from "./wq.js";

import {dq} from "./dq.js";

const quit = () => {
    console.log("GoodBye");
}
const games = {
    rps,
    wq,
    dq,
    quit


};


const resultArray =[];
let currentGame ="";
const playGAme = () => {
    let gameResult ={};

    if (currentGame ) {
        gameResult = games[gameValue]();

     } else {
        const currentGame = window.prompt("choose your game");

     }
}



games[game]();








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