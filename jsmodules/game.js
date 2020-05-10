import Paddle from './paddle.js';
import InputHandler from './InputHandler.js';
import Ball from './ball.js';

import {buildLevel,level1,level2} from './level.js';

const GameState={
    Running:1,
    Paused:2,
    Game_over:3,
    Menu:4,
    Level_Completed:5
}

export default class Game{
    constructor(gameWidth,gameHeight){
        this.gameHeight=gameHeight;
        this.gameWidth=gameWidth;
        this.paddle=new Paddle(this);
        this.ball=new Ball(this)
        new InputHandler(this.paddle,this);
        this.gameObjects=[];
        this.gameState=GameState.Menu;
        this.bricks=[];
        this.levels=[level1,level2];
        this.currentLevel=0;

        this.inputControlls={
            left:{x:0,y:0},
            right:{x:0,y:0},
            start:{x:0,y:0},
            pause:{x:0,y:0}
        }
        this.levelInfo=document.getElementById('level_info')

    }

    setGameOverState(){
        this.gameState=GameState.Game_over;
        this.ball.setPosition();
    }

    start(){
        if(this.gameState==GameState.Running) {return};
        console.log("current index is")
        console.log(this.currentLevel)
        this.levelInfo.innerHTML=`Level ${this.currentLevel+1}`;
        this.bricks=buildLevel(this,this.levels[this.currentLevel])
        this.gameObjects=[this.ball,this.paddle]
        console.log("setting to running")
        this.gameState=GameState.Running;
        console.log(this.gameState)


        
    }

    update(){
        if(this.gameState==GameState.Running && this.bricks.length<=0){
            if(this.currentLevel<this.levels.length-1){
                this.currentLevel++;
            }else{
                this.currentLevel=0;
            }
            console.log("current level is")
            console.log(this.currentLevel)
            this.gameState=GameState.Level_Completed;
            this.start();

        }
        if(this.gameState==GameState.Paused || 
            this.gameState==GameState.Menu ||
            this.gameState==GameState.Game_over
            )
        {
            console.log(this.gameState);
            return ;
        }
        [...this.gameObjects,...this.bricks].forEach(object=>object.update());
        this.bricks= this.bricks.filter(object=>!object.markForDeletion)

    }

    draw(ctx){
        [...this.gameObjects,...this.bricks].forEach(object=>object.draw(ctx));
        if(this.gameState==GameState.Paused){
            ctx.fillStyle="rgba(0,0,0,0.7)";
            ctx.fillRect(0,0,this.gameWidth,this.gameHeight);
            ctx.font="30px Arial";
            ctx.fillStyle="white"
            ctx.textAlign="center";
            ctx.fillText("Paused",this.gameWidth/2,this.gameHeight/2);
        }
        if(this.gameState==GameState.Menu){
            ctx.fillStyle="rgba(0,0,0,1)";
            ctx.fillRect(0,0,this.gameWidth,this.gameHeight);
            ctx.font="30px Arial";
            ctx.fillStyle="white"
            ctx.textAlign="center";
            ctx.fillText("press space to start",this.gameWidth/2,this.gameHeight/2);
        }
        if(this.gameState==GameState.Game_over){
            ctx.fillStyle="rgba(0,0,0,1)";
            ctx.fillRect(0,0,this.gameWidth,this.gameHeight);
            ctx.font="30px Arial";
            ctx.fillStyle="white"
            ctx.textAlign="center";
            ctx.fillText("Game over.. press space to restart",this.gameWidth/2,this.gameHeight/2);
        }

    }

    togglePause(){
        console.log(this.gameState)
        if(this.gameState==GameState.Paused){
            this.gameState=GameState.Running;
            
        }else{
            this.gameState=GameState.Paused;
        }

    }
}