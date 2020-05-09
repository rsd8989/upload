import Game from './game.js';


var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');
var canvas_container=document.getElementById('canvas_container');

var screen_width=Math.floor(canvas_container.clientWidth/10)*10+2;
var screen_height=Math.floor(canvas_container.clientHeight/10)*10+2;
canvas.style.width=screen_width+"px";
canvas.style.height=screen_height+"px";
console.log(screen_width)
console.log(screen_height)

canvas.width=screen_width;
canvas.height=screen_height;

const SCREEN_WIDTH=screen_width;
const SCREEN_HEIGHT=screen_height;

var game=new Game(SCREEN_WIDTH,SCREEN_HEIGHT);



var buttons=document.querySelectorAll(".btn-left,.btn-right,.btn-pause,.btn-start");
buttons.forEach(element=>{
    console.log(element)
})




function gameLoop(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    game.update();
    game.draw(ctx);
    requestAnimationFrame(gameLoop);
}



gameLoop();