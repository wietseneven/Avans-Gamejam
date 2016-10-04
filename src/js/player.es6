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
    this.watchKeys();
  }

  watchKeys() {
    window.onkeydown = ((e) => {
      switch(e.which) {
        case 37: // left
          debug('left');
          this.position.x--;
          break;

        case 38: // up
          debug('up');
          this.position.y--;
          break;

        case 39: // right
          debug('right');
          this.position.x++;
          break;

        case 40: // down
          debug('down');
          this.position.y++;
          break;

        default: return; // exit this handler for other keys
      }
      e.preventDefault();
    })
  }

  draw(ctx) {
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