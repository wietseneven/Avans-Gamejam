export default class player {

  constructor(canvas) {
    this.canvas = canvas;

    this.position = {
      x: 100,
      y: 100
    }
  }

  start() {
    this.canvas.context.font = "30px Arial";
    this.canvas.context.fillText("Hello World",10,50);
  }

}