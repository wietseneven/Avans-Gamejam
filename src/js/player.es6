export default class player {

  constructor(canvas) {
    this.canvas = canvas;
    this.keys = '';

    this.position = {
      x: 100,
      y: 100
    };

    // this.draw = this.draw.bind(this);
  }

  start() {
    this.watchKeys();
  }

  watchKeys() {
    window.onkeydown = ((e) => {
      this.keys = e.which;
      //e.preventDefault();
    });
    window.onkeyup = (() => {
      this.keys = '';
    });
  }

  handleKeys() {
    let speed = 3;
    switch(this.keys) {
      case 37: // left
      case 65: // a
        debug('left');
        this.position.x -= speed;
        break;

      case 38: // up
      case 87: // w
        debug('up');
        this.position.y -= speed;
        break;

      case 39: // right
      case 68: // d
        debug('right');
        this.position.x += speed;
        break;

      case 40: // down
      case 83: // s
        debug('down');
        this.position.y += speed;
        break;

      default: return; // exit this handler for other keys
    }
  }
  draw(ctx) {
    this.handleKeys();
    ctx.beginPath();
    ctx.arc(this.position.x,this.position.y,40,0,2*Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke();
  }

}
function debug(string) {
  console.log(string);
}