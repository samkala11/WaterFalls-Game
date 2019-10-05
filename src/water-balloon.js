export default class WaterBalloon{

    constructor(game, options){
        this.image = document.getElementById("water-balloon")

        this.gameWidth = game.gameWidth
        this.gameHeight = game.gameHeight
        // this.gameOver = false;

        this.position ={
            x: options.positionX,
            y: 1
        }

        this.speed ={
            x: 0,
            y: options.speedY
        };

        this.dims = {
            width: 30,
            height: 52
        }
    }

    draw(ctx){
        ctx.drawImage(this.image, this.position.x, this.position.y, this.dims.width, this.dims.height)
    }

    update(dt){
        this.position.x += this.speed.x;
        this.position.y += this.speed.y; 
    }

    
}