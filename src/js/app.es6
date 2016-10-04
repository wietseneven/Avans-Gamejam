import Canvas from './canvas.es6';
import Player from './player.es6';

class Game {
  constructor(a, b) {
    this.canvas = new Canvas();

    this.setupCanvas();
    this.player = new Player(this.canvas);

    this.setupPlayer();
  }

  setupCanvas() {
    this.canvas.setCanvas('#game');

    const width = window.innerWidth;
    const height = window.innerHeight;
    this.canvas.setDimensions(width, height);
    this.canvas.draw();
  }

  setupPlayer() {
    this.player.start();
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  let t = new Game(0,0);
  console.log('Hello world!');
});