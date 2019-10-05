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
                case 16:
                    this.keylogger.fire = true;
                    console.log("space clicked")
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
                    case 16:
                        this.keylogger.fire = false;
                        break;
                }


        });


        
    }
}