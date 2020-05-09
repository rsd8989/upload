export default class Paddle{

    constructor(game){
        this.position={};
        this.gameWidth=game.gameWidth;
        this.width=(30/100)*game.gameWidth;
        if(this.width>150){
            this.width=150;
        }
        this.height=20;
        this.maxSpeed=10;
        this.speed=0;
        this.position.x=game.gameWidth/2-this.width/2;
        this.position.y=game.gameHeight-this.height-10;
    }

    moveLeft(){
        this.speed=-this.maxSpeed;

    }

    moveRight(){
        this.speed=this.maxSpeed;

    }

    update(){
        this.position.x+=this.speed;
        
        if(this.position.x<=0){
            this.position.x=0;
        }

        if(this.position.x+this.width>=this.gameWidth){
            this.position.x=this.gameWidth-this.width;
        }

    }

    stop(){
        this.speed=0;
    }

    draw(ctx){
        ctx.fillStyle="green";
        ctx.fillRect(
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )

    }

}