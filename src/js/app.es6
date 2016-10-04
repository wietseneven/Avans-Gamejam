import Canvas from './canvas.es6';
import Highscores from "./highscores.es6";

class Game {
  constructor(a, b) {
    this.canvas = new Canvas();

    this.setupCanvas();

    // this._c.watchButton('#getScores', 'get');
    // this._c.watchButton('#postScore', 'post');
  }

  setupCanvas() {
    this.canvas.setCanvas('#game');

    const width = window.innerWidth;
    const height = window.innerHeight;
    this.canvas.setDimensions(width, height);
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  let t = new Game(0,0);
  console.log('Hello world!');
});