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
console.log("client widht")
console.log(canvas.clientWidth,canvas.clientHeight)

canvas.width=canvas.clientWidth;
canvas.height=canvas.clientHeight;

const SCREEN_WIDTH=screen_width;
const SCREEN_HEIGHT=screen_height;
var gameOverLine=Math.round((80/100)*canvas.height);


var game=new Game(SCREEN_WIDTH,gameOverLine);


var leftImage=document.getElementById('leftImage');
var rightImage=document.getElementById('rightImage')
var start=document.getElementById('start');
var iconSize=Math.floor((10/100)*canvas.width);

if(iconSize>50){
    iconSize=50;
}
var inputControllCenter=canvas.width/2-iconSize

var leftarrowCord={
    x:inputControllCenter-iconSize*2,
    y:canvas.height-iconSize-10
}

var rightarrowCord={
    x:inputControllCenter+iconSize*2,
    y:canvas.height-iconSize-10
}
var startCord={
    x:inputControllCenter,
    y:canvas.height-iconSize-10
}
ctx.drawImage(start,inputControllCenter,canvas.height-iconSize-10,iconSize,iconSize);
ctx.drawImage(leftImage,leftarrowCord.x,leftarrowCord.y,iconSize,iconSize);
ctx.drawImage(rightImage,rightarrowCord.x,rightarrowCord.y,iconSize,iconSize);
 var level_info=document.getElementById('level_info')
 console.log(level_info)
 level_info.innerHTML=`
    ${startCord.x},${startCord.y}
 `
canvas.addEventListener('touchstart',(e)=>{
    const touchX=e.touches[0].clientX;
    const touchY=e.touches[0].clientY;
    level_info.innerHTML=`
    ${startCord.x},${startCord.y},${touchX},${touchY}
 `
    if(touchX>=startCord.x && touchX<=startCord.x+iconSize &&
        touchY>=startCord.y && touchY<=startCord.y+iconSize
    ){
        alert('ij')
        game.start();
    }
    if(touchX>=leftarrowCord.x && touchX<=leftarrowCord.x+iconSize &&
       touchY>=leftarrowCord.y && touchY<=leftarrowCord.y+iconSize
    ){game.paddle.moveLeft()}
})
console.log(leftarrowCord)

function gameLoop(){
    ctx.clearRect(0,0,canvas.width,gameOverLine);
    ctx.beginPath();
    ctx.moveTo(0,gameOverLine);
    ctx.lineTo(canvas.width,gameOverLine);
    ctx.stroke();
    ctx.closePath();
   
    game.update();
    game.draw(ctx);
    requestAnimationFrame(gameLoop);
}


//
gameLoop();