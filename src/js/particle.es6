export default class particle {

  constructor(canvas) {
    console.log('particle');
    this.canvas = canvas;

    this.position = {
      x: this.canvas.canvas.offsetWidth / 2,
      y: this.canvas.canvas.offsetHeight / 2
    };

    this.density = 20;
    this.particleSize = 10;
    this.gravity = 0.5;
    this.maxLife = 100;
    this.speed = 2;
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