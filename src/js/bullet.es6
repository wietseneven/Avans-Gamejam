export default class bullet {
  constructor(width, height, angle) {
    this.position = {
      x: 0,
      y: 0
    };
    this.width = 5;
    if (angle) {
      this.angle = angle;
    } else {
      this.angle = toRadians(Math.floor(Math.random() * 360));
    }

    this.speed = Math.round(Math.random() * 20 + 5);
    this.update = this.update.bind(this);
    this.startTime = Date.now();
    this.remove = false;

    this.cwidth = width;
    this.cheight = height;
  }

  setStartPosition(x, y) {
    this.position.x = x;
    this.position.y = y;
  }

  update(enemies) {
    this.getCollision(enemies);
    //Left wall
    if (this.position.x < 0) {
      if (this.speed > 0) {
        this.speed = -this.speed;
      } else {
        this.speed = Math.abs(this.speed);
      }
    }
    //Right wall
    if (this.position.x > this.cwidth) {
      if (this.speed > 0) {
        this.speed = -this.speed;
      } else {
        this.speed = Math.abs(this.speed);
      }
    }
    //Top wall
    if (this.position.y < 0) {
      if (this.speed > 0) {
        this.speed = -this.speed;
      } else {
        this.speed = Math.abs(this.speed);
      }
    }
    //Bottom wall
    if (this.position.y > this.cheight) {
      if (this.speed > 0) {
        this.speed = -this.speed;
      } else {
        this.speed = Math.abs(this.speed);
      }
    }
    this.position.x += this.speed * Math.cos(this.angle);
    this.position.y += this.speed * Math.sin(this.angle);

    if (this.position.x - (this.width / 2) > this.cwidth) {
      this.remove = true;
    }
  }

  getCollision(enemies) {
    let i = 0;
    for (let enemie of enemies) {
      const en = {
        X: enemie.position.x,
        Y: enemie.position.y,
        W: 10,
        H: 10
      };
      const bul = {
        X: this.position.x,
        Y: this.position.y,
        W: this.width,
        H: this.width
      };
      if (en.X < bul.X + bul.W &&
        en.X + en.W > bul.X &&
        en.Y < bul.Y + bul.H &&
        en.H + en.Y > bul.Y) {

        enemie.alive = false;

      }

      i++;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.position.x,this.position.y,this.width,0,2*Math.PI);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke();
  }

}

function toRadians (angle) {
  return angle * (Math.PI / 180);
}