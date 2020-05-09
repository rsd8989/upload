export default class Canvas{

   static getContext(){
       console.log("get context called")
        let canvas=document.getElementById("canvas");
        let ctx=canvas.getContext('2d');
        return ctx;


    }
}