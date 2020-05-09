export function checkCollision(ball,object){
    let topOfBall=ball.position.y;
    let bottomOfBall=ball.position.y+ball.height;

    let topOfObject=object.position.y;
    let bottomOfObject=object.position.y+object.height;
    let leftOfObject=object.position.x;
    let rightOfObject=object.position.x+object.width;

    if(
        bottomOfBall>=topOfObject &&
        topOfBall<=bottomOfObject &&
        ball.position.x>=leftOfObject &&
        ball.position.x+ball.width<=rightOfObject
    ){
        return true;
    }else{
        return false;
    }
}