export default class particle {

  constructor(canvas) {
    console.log('particle');
    this.canvas = canvas;

    this.position = {
      x: this.canvas.canvas.offsetWidth / 2,
      y: this.canvas.canvas.offsetHeight / 2
    };

    this.hitbox = {
      links: position.x - 5,
      boven: position.y + 5,
      rechts: position.x + 5,
      onder: position.y - 5
    };

    //this.density = 20;
    //this.particleSize = 10;
    //this.maxLife = 100;
    this.speed = {
      x: Math.random() * 10-2,
      y: Math.random() * 10-2
    };
  }

  update() {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(this.position.x,this.position.y,10,0,2*Math.PI, true);
    ctx.closePath();
    ctx.fill();
  }
}