

export default class InputHandler{

    constructor(paddle,game){
        this.paddle=paddle;
        this.game=game;

        var buttons=document.querySelectorAll(".btn-left,.btn-right,.btn-pause,.btn-start");
            buttons.forEach(element=>{
                this.setButtonHandler(element)
            })
        document.addEventListener('keydown',(e)=>{
            switch (e.keyCode){
                case 37:
                    paddle.moveLeft();
                break;
                
                case 39:
                    paddle.moveRight();
                break;
            }

        })

        document.addEventListener('keyup',(e)=>{
            
            switch (e.keyCode){
                case 37:
                    paddle.stop();
                break;
                
                case 39:
                    paddle.stop();
                break;

                case 27:
                    game.togglePause();
                break;
                
                case 32:
                    game.start();
                break;
            }
        })
    }

    setButtonHandler(element){
        if(element.className=="btn-left"){
            // element.addEventListener('mousedown',()=>{
                
            //     console.log("keydown")
            //     this.paddle.moveLeft();

            // })
            // element.addEventListener('touchstart',()=>{
            //     console.log("tourch startd")
            // })
            element.addEventListener('keyup',()=>{
                console.log("moseu up")
                this.paddle.stop();

            })

        }
        if(element.className=="btn-right"){
            element.addEventListener('mousedown',()=>{
                this.paddle.moveRight();

            })
            element.addEventListener('mouseup',()=>{
                this.paddle.stop();

            })
        }
        if(element.className=="btn-pause"){
            element.addEventListener('click',()=>{
                this.game.togglePause();

            })
        }

        if(element.className=="btn-start"){
            element.addEventListener('click',()=>{
                this.game.start();

            })
        }

    }

}