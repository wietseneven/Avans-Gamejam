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
      x: this.canvas.canvas.offsetWidth / 2,
      y: this.canvas.canvas.offsetHeight / 3
    };

    this.cursor = {
      x: 0,
      y: 0,
      mousedown: false
    };

    this.alive = 10;

    this.handleCursor = this.handleCursor.bind(this);
    this.fireBullet = this.fireBullet.bind(this);
  }

  start(particles) {
    this.enemies = particles.particles;
    this.watchKeys();
    this.watchCursor();
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
          this.cursor.mousedown = false;
          this.keys.space = false;
      }
    });

    this.canvas.canvas.addEventListener('click', this.handleCursor);
  }

  watchCursor() {
    let down = 0;
    document.body.onmousedown = () => {
      down = 1
    };
    document.body.onmouseup = () => {
      down = 0;
    };
    let cursorX = 0, cursorY = 0;
    this.canvas.canvas.addEventListener('mousemove', (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
      this.cursor = {
        x: cursorX,
        y: cursorY,
        mousedown: down
      }
    });
  }

  handleCursor(e) {
    //console.log(this.cursor);
    if (this.cursor.mousedown) {
      //console.log('cursor: ' + e.clientX + ' ' + e.clientY);
      //console.log('player: ' + this.position.x + ' ' + this.position.y);


      const angleRadians = Math.atan2(this.cursor.y - this.position.y, this.cursor.x - this.position.x);
      //console.log(angleRadians);
      //const angleRadians = Math.atan2(this.position.y - e.clientY, this.position.x - e.clientX) ;
      this.fireBullet(angleRadians);
    }
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
      //this.fireBullet();
      this.cursor.mousedown = true;
    }
  }

  fireBullet(angle) {
    let bullet = new Bullet(this.canvas.canvas.offsetWidth, this.canvas.canvas.offsetHeight, angle);
    bullet.setStartPosition(this.position.x, this.position.y);

    this.bullets.push(bullet);
  }

  watchCollision() {
    for (let enemie of this.enemies) {
      const en = {
        X: enemie.position.x,
        Y: enemie.position.y,
        W: 10,
        H: 10
      };
      const bul = {
        X: this.position.x,
        Y: this.position.y,
        W: 20,
        H: 20
      };
      if (en.X < bul.X + bul.W &&
        en.X + en.W > bul.X &&
        en.Y < bul.Y + bul.H &&
        en.H + en.Y > bul.Y) {

        this.alive--;
        console.log(this.alive);

      }
    }
  }

  draw(ctx) {
    if (this.alive > 0) {
      this.handleKeys();
      this.handleCursor();

      let i = 0;
      for (let bullet of this.bullets) {
        if (bullet.remove) {
          this.bullets.splice(i, 1);
        }
        bullet.update(this.enemies);
        bullet.draw(ctx);
        i++;
      }

      this.watchCollision();
    }

    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke();

    ctx.font="20px Georgia";
    ctx.fillStyle = 'white';
    ctx.textAlgin = 'center';
    ctx.fillText(this.alive,this.position.x - 10,this.position.y + 5);

  }

}
function debug(string) {
  //console.log(string);
}