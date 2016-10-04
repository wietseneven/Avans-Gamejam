export default class canvas {
  constructor() {
    console.log('Setting up canvas')
  }

  setCanvas(canvas) {
    this.canvas = document.querySelector(canvas);
  }

  setDimensions(width, height){
    this.canvas.width = width;
    this.canvas.height = height;
  }
}