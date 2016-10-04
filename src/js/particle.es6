export default class player {

  constructor(canvas) {
    console.log('particle');
    this.canvas = canvas;
    this.position = {
      x: 0,
      y: 0
    }
  }

  setStartPosition(x, y) {
    this.position.x = x;
    this.position.y = y;
  }

  move(){

  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(this.position.x,this.position.y,10,0,2*Math.PI, true);
    ctx.closePath();
    ctx.fill();
  }

}