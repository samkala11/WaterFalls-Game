import Bullet from './bullet';

export default class Goat{
    constructor(game){
        this.image = document.getElementById("the-goat");

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.width = 100;
        this.height = 95;

        this.maxSpeed = 5;
        this.speed = 0;

        this.position = {
            x: game.gameWidth / 2 - this.width / 2,
            y: game.gameHeight  - this.height 
        }

    }


  fireBullet() {

    // const relVel = Util.scale(
    //   Util.dir(this.vel),
    //   Bullet.SPEED
    // );

    const bulletVel = [
      0, 1];

    const bullet = new Bullet({
      pos: [this.position.x, this.position.y],
      vel: bulletVel,
      color: "#f000",
      game: this.game
    })
    this.game.add(bullet);
    }   



    draw(ctx){
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height )
    }


    moveLeft(){
        this.speed = -this.maxSpeed;
    }


    moveRight(){
        this.speed = this.maxSpeed;
    }

    stop(){
        this.speed = 0;
    }


    update(dt){

        if (!dt) return;

        this.position.x += this.speed;
        
        if (this.position.x < 0) this.position.x  = 0;

        if (this.position.x + this.width > this.gameWidth) this.position.x = this.gameWidth - this.width;


        // if (this.position.x <= 0) this.position.x  = this.gamewidth - this.width;

        // if (this.position.x + this.width > this.gameWidth) this.position.x = 0;

       
    }
}