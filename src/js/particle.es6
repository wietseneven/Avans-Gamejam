export default class player {

  constructor(canvas) {
    this.canvas = canvas;

    this.position = {
      x: 128,
      y: 128
    };

  }

  start() {

  }



  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(this.position.x,this.position.y,10,0,2*Math.PI, true);
    ctx.closePath();
    ctx.fill();
  }

}
function debug(string) {
  console.log(string);
}