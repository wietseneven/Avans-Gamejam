import Canvas from './canvas.es6';
import Player from './player.es6';
import ParticleSystem from './particleSystem.es6';

class Game {
  constructor(a, b) {
    this.canvas = new Canvas();
    this.setupCanvas();

    this.particleSystem = new ParticleSystem(this.canvas);
    this.setupParticleSystem();

    this.player = new Player(this.canvas);
    this.setupPlayer();
  }

  setupCanvas() {
    this.canvas.setCanvas('#game');
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.canvas.setDimensions(width, height);
    // this.canvas.draw();
  }

  setupParticleSystem() {
    this.particleSystem.start();
  }

  setupPlayer() {
    this.player.start();
  }

  draw() {
    this.canvas.context.clearRect(0, 0, this.canvas.canvas.width, this.canvas.canvas.height);

    this.player.draw(this.canvas.context);
    this.particleSystem.draw(this.canvas.context);

    //this.draw();
  }

  render() {
    setInterval(() => {
      this.draw();
    }, 10);
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  let game = new Game(0,0);
  game.render();
  console.log('Hello world!');
});