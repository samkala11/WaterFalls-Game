export default class InputHandler {

    constructor(robin) {

        this.keylogger = {fire: false};


        document.addEventListener('keydown', (e) => {
            
            switch(e.keyCode){
                case 39:  // Right
                    robin.moveRight();
                    break;
                case 37:  // Left
                    robin.moveLeft();
                    break;
                case 88: // X button
                    this.keylogger.fire = true;
                    console.log("X clicked")
                    break;
                case 13: // ENTER
                    document.getElementById("play-button").click();
                    document.getElementsByClassName("next-level")[0].click()
                    document.getElementsByClassName("level-message")[0].classList.add("remove-message");
                    break;
                case 82: // r button
                    document.getElementsByClassName("restart-game")[0].click()
                    break; 
                case 32: // SPACE
                    document.getElementById("pause-button").click();
                    break;
                }   

            

        });

        document.addEventListener('keyup', (e) => {
            
            switch(e.keyCode){
                case 39:  // Right
                if (robin.speed > 0) robin.stop();
                    break;
                case 37:  // Left
                    if (robin.speed < 0)  robin.stop();
                    break;
                case 88: // X button
                    this.keylogger.fire = false;
                    break; 
                }


        });


        
    }
}