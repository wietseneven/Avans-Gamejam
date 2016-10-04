export default class player {

  constructor(canvas) {
    console.log('particle');
    this.canvas = canvas;
    this.position = {
      x: 0,
      y: 0
    };
    this.speed = Math.random() * 10;

  }

  setStartPosition(x, y) {
    this.position.x = x;
    this.position.y = y;
  }

  update() {
    this.position.x += this.speed;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(this.position.x,this.position.y,10,0,2*Math.PI, true);
    ctx.closePath();
    ctx.fill();
  }

}