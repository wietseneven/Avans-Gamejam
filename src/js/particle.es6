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
      x: Math.random() * 10 - 2,
      y: Math.random() * 10 - 2
    };
    this.alive = true;
  }

  update() {
    //Left wall
    if (this.position.x < 0) {
      if (this.speed.x > 0) {
        this.speed.x = -this.speed.x;
      } else {
        this.speed.x = Math.abs(this.speed.x);
      }
    }
    //Right wall
    if (this.position.x > this.canvas.canvas.offsetWidth) {
      if (this.speed.x > 0) {
        this.speed.x = -this.speed.x;
      } else {
        this.speed.x = Math.abs(this.speed.x);
      }
    }
    //Top wall
    if (this.position.y < 0) {
      if (this.speed.y > 0) {
        this.speed.y = -this.speed.y;
      } else {
        this.speed.y = Math.abs(this.speed.y);
      }
    }
    //Bottom wall
    if (this.position.y > this.canvas.canvas.offsetHeight) {
      if (this.speed.y > 0) {
        this.speed.y = -this.speed.y;
      } else {
        this.speed.y = Math.abs(this.speed.y);
      }
    }
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