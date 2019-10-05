import Game from "./game";

export default class Arrows {
    constructor(game){
        this.objects = [];

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.maxID = 0;
    }

    init(arrow){
        arrow.vx = arrow.v * Math.cos(arrow.angle / 180);
        arrow.vy = arrow.v * Math.sin(arrow.angle/ 180);
    }

    push(arrow) {
        this.init(arrow);
        var id = -1;

        while(this.objects[++id] != undefined) {
            this.objects[id] = arrow;
            if (id > this.maxId) {this.maxID = id};
        }
    }

    update(dt){
        for (let i = 0; i < this.maxID; i++) {
          if(this.objects[i] === undefined) continue;

          let obj = this.objects[i];

          obj[x] += obj.vx;
        //   * dt;
          obj[y] += obj.vy 
        //   * dt;
          console.log(this.gameWidth)

          if(
              obj.x < 0 || obj.y < 0 || obj.x > this.gameWidth || obj.y > this.gameHeight 
            ) { delete this.objects[i]}
        }
    }

    draw(ctx) {
        ctx.fillStyle = "#f00";
        for (let i = 0; i < this.maxID; i++) {
            if(this.objects[i] == undefined) continue;
            
            let obj = this.objects[i];
            ctx.beginPath();
            ctx.arc(obj.x, obj.y, 10, 0, 6.28);
            ctx.fill();
        }
    }
}