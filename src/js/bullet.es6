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
    this.position.x += this.speed * Math.cos(this.angle);
    this.position.y += this.speed * Math.sin(this.angle);

    if (this.position.x - (this.width / 2) > this.cwidth) {
      this.remove = true;
    }
  }

  getCollision(enemies) {
    let i = 0;
    for (let enemie of enemies) {
      const enX = enemie.position.x;
      const enY = enemie.position.y;
      const enW = 10;
      const enH = 10;
      const bulX = this.position.x;
      const bulY = this.position.y;
      const bulW = this.width;
      const bulH = this.width;
      if (enX < bulX + bulW &&
        enX + enW > bulX &&
        enY < bulY + bulH &&
        enH + enY > bulY) {

        console.log('collision');
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