export default class particle {

  constructor(canvas) {
    this.canvas = canvas;

    this.position = {
      x: this.canvas.canvas.offsetWidth / 2,
      y: this.canvas.canvas.offsetHeight / 2
    };

    //this.density = 20;
    //this.particleSize = 10;
    //this.maxLife = 100;
    this.speed = {
      x: Math.random() * 10-2,
      y: Math.random() * 10-2
    };
    this.alive = true;
  }

  update() {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
  }

  getCollition() {

  }

  draw(ctx) {
    if (this.alive) {
      ctx.beginPath();
      ctx.fillStyle = "green";
      ctx.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI, true);
      ctx.closePath();
      ctx.fill();
    }
  }
}