export default class canvas {
  constructor() {
    console.log('Setting up canvas')
  }

  setCanvas(canvas) {
    this.canvas = document.querySelector(canvas);
    this.context = this.canvas.getContext("2d");
  }

  setDimensions(width, height){
    this.canvas.width = width;
    this.canvas.height = height;
  }

  draw() {
    this.context.moveTo(0,0);
    this.context.lineTo(200,100);
    this.context.stroke();
  }
}