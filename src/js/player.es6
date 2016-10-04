import Bullet from './bullet.es6';

export default class player {

  constructor(canvas) {
    this.canvas = canvas;
    this.keys = {
      left: false,
      right: false,
      up: false,
      down: false,
      space: false
    };

    this.bullets = [];

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
      switch (e.which) {
        case 37: // left
        case 65: // a
          this.keys.left = true;
          break;

        case 38: // up
        case 87: // w
          this.keys.up = true;
          break;

        case 39: // right
        case 68: // d
          this.keys.right = true;
          break;

        case 40: // down
        case 83: // s
          this.keys.down = true;
          break;

        case 32:
          this.keys.space = true;
      }
      //e.preventDefault();
    });
    window.onkeyup = ((e) => {
      switch (e.which) {
        case 37: // left
        case 65: // a
          this.keys.left = false;
          break;

        case 38: // up
        case 87: // w
          this.keys.up = false;
          break;

        case 39: // right
        case 68: // d
          this.keys.right = false;
          break;

        case 40: // down
        case 83: // s
          this.keys.down = false;
          break;

        case 32:
          this.keys.space = false;
      }
    });
  }

  handleKeys() {
    let speed = 3;
    //console.log(this.keys);
    if (this.keys.left) {
      debug('left');
      this.position.x -= speed;
    }

    if (this.keys.up) {
      debug('up');
      this.position.y -= speed;
    }

    if (this.keys.right) {
      debug('right');
      this.position.x += speed;
    }

    if (this.keys.down) {
      debug('down');
      this.position.y += speed;
    }

    if (this.keys.space) {
      debug('space');
      this.fireBullet();
    }
  }

  fireBullet() {
    let bullet = new Bullet();
    bullet.setStartPosition(this.position.x, this.position.y);

    this.bullets.push(bullet);
  }

  draw(ctx) {
    this.handleKeys();

    for (let bullet of this.bullets) {
      //ullet.move();
      bullet.draw(ctx);
    }

    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, 40, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke();
  }

}
function debug(string) {
  console.log(string);
}