// import Robin from './robin';
// import InputHandler from './input_handle';
// import Goat from './goat';
// import WaterBalloon from './water-balloon';
// import OilBalloon from './oil-balloon';
import Game from './game.js';

console.log("Webpack is working Kingg!!!!")

let canvas = document.getElementById("game-canvas");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 900;
const GAME_HEIGHT = 700;


let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start(ctx);




// game.addWaterBalloons();
// game.loseDetection();

let playButton = document.getElementById("play-button");

playButton.addEventListener("click", () => {game.paused = false;
playButton.classList.add("remove-button")})

let pauseButton = document.getElementById("pause-button");


let levelMessage = document.getElementsByClassName("level-message")[0];

let currentLevelInc = true;

function displayLevelMessage(game, messageDiv, currentLevelUpdate){
    if (game.score === 10){
        game.paused = true;
        messageDiv.classList.remove("remove-message")
        currentLevelUpdate = true; 
        game.score = 0;
        
        if (currentLevelUpdate) {
            game.currentLevel += 1;
            currentLevelInc = false; } 
        }
}


// LOSE AND RESTART
let loseMessage = document.getElementsByClassName("lose-message")[0];

function displayLoseMessage(game, loseMessagecont) {
    if(game.MissedWaterballoons >= 6 || game.HitOilBalloons >= 6){
        loseMessagecont.classList.remove("remove-message");
        game.paused = true;
    } 
}


let restartGameButton = document.getElementsByClassName("restart-game")[0];

function RestartGame(restartbutton, game, loseMessagecont ){
    
    restartbutton.addEventListener("click", () => {
       game.restart();
       loseMessagecont.classList.add("remove-message");

    })
}

RestartGame(restartGameButton, game, loseMessage);






// Level UP!!!
let nextLevelButton = document.getElementsByClassName("next-level")[0];

function goToNextLevel(game, nextButton, messageDiv) {
    nextButton.addEventListener("click", () => {
        game.paused = false;
        game.score = 0;
        messageDiv.classList.add("remove-message")
    })
}


pauseButton.addEventListener("click", () => {
    if (game.paused === false) {
        game.paused = true;
        pauseButton.innerText = "Resume"
    } else {
        game.paused = false;
        pauseButton.innerText = "Pause"
    }
})


let lastTime = 0;


function gameLoop(timestamp) {

    let dt = timestamp - lastTime;
    lastTime = timestamp;

    displayLevelMessage(game, levelMessage, currentLevelInc);
    goToNextLevel(game, nextLevelButton, levelMessage);
    displayLoseMessage(game, loseMessage);
    
    ctx.clearRect(0,0, GAME_WIDTH, GAME_HEIGHT);
    game.draw(ctx, 120);

    if (!game.paused) 
    { 
        game.update(dt);
    }
   
    

    requestAnimationFrame(gameLoop); // A Browser function
}



requestAnimationFrame(gameLoop);
