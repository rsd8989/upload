import {checkCollision} from './collisionDetection.js';

export default class Brick{
    constructor(game,position){

        this.width=game.gameWidth/10;
        console.log(this.width)
        this.height=24
        this.position=position;
        this.image=document.getElementById("brickImage")
        this.game=game;
        this.markForDeletion=false;


    }

    update(){
        if(checkCollision(this.game.ball,this)){
            this.game.ball.speed.y=-this.game.ball.speed.y;
            this.markForDeletion=true;
        }

    }

    draw(ctx){
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height);
        }
    
}