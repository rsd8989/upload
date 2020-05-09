import {checkCollision} from './collisionDetection.js'
export default class Ball{

    constructor(game){
        this.setPosition();
        
        this.speed={
            x:5,
            y:5
        };
        this.game=game;
        this.image=document.getElementById("ballImage")
        this.gameWidth=game.gameWidth;
        this.gameHeight=game.gameHeight;
        this.width=16;
        

        this.height=16;

    }

    setPosition(){
        this.position={
            x:30,
            y:10
        };
    }


    update(){
        this.position.x+=this.speed.x;
        this.position.y+=this.speed.y;

        //collisio on left or right of wall
        if(this.position.x+this.width>=this.gameWidth || this.position.x<=0){
            this.speed.x=-this.speed.x;
        }

        //collision on top or bottom of the wall
        if(this.position.y<=0){
            this.speed.y=-this.speed.y;
        }
        if(this.position.y+this.height>=this.gameHeight){
            this.game.setGameOverState();
        }

        //collision with paddle
        let bottomOfBall=this.position.y+this.height;
        let topOfPaddle=this.game.paddle.position.y;
        let leftOfPaddle=this.game.paddle.position.x;
        let rightOfPaddle=this.game.paddle.position.x+this.game.paddle.width;

        if(checkCollision(this,this.game.paddle)){
            this.speed.y=-this.speed.y;

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