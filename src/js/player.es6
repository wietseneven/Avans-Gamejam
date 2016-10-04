export default class player {

  constructor(canvas) {
    this.canvas = canvas;

    this.position = {
      x: 100,
      y: 100
    };

    // this.draw = this.draw.bind(this);
  }

  start() {

  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.position.x,this.position.y,40,0,2*Math.PI);
    ctx.stroke();
  }

}