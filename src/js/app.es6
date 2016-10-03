import Highscores from "./highscores.es6";

class Test {
  constructor(a, b) {
    this._a = a;
    this._b = b;
    this._c = new Highscores();

    this._c.watchButton('#getScores', 'get');
    this._c.watchButton('#postScore', 'post');
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  let t = new Test(0,0);
  console.log('Hello world!');
});