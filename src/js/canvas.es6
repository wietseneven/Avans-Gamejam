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
    this.checkRetina();
  }

  checkRetina() {
    if (window.devicePixelRatio > 1) {
      var canvasWidth = this.canvas.width;
      var canvasHeight = this.canvas.height;

      this.canvas.width = canvasWidth * window.devicePixelRatio;
      this.canvas.height = canvasHeight * window.devicePixelRatio;
      this.canvas.style.width = canvasWidth + 'px';
      this.canvas.style.height = canvasHeight + 'px';

      this.context.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
  }

  draw() {
    this.context.moveTo(0,0);
    this.context.lineTo(200,100);
    this.context.stroke();
  }
}