export default class bullet {
  constructor() {
    console.log('bul');
    this.position = {
      x: 0,
      y: 0
    };
    this.speed = Math.random() * 20;

    this.update = this.update.bind(this);

    this.startTime = Date.now();

    this.remove = false;
  }

  setStartPosition(x, y) {
    this.position.x = x;
    this.position.y = y;
  }

  update() {
    this.position.x += this.speed;

    if (Date.now() - 200 > this.startTime) {
      this.remove = true;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.position.x,this.position.y,20,0,2*Math.PI);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke();
  }

}