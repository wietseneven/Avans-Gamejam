export default class bullet {
  constructor() {
    console.log('bul');
    this.position = {
      x: 0,
      y: 0
    }
  }

  setStartPosition(x, y) {
    this.position.x = x;
    this.position.y = y;
  }

  move() {

  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.position.x,this.position.y,20,0,2*Math.PI);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke();
  }

}