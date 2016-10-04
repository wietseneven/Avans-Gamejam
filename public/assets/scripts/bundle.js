!function e(t,n,i){function a(r,s){if(!n[r]){if(!t[r]){var c="function"==typeof require&&require;if(!s&&c)return c(r,!0);if(o)return o(r,!0);var u=new Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[r]={exports:{}};t[r][0].call(l.exports,function(e){var n=t[r][1][e];return a(n?n:e)},l,l.exports,e,t,n,i)}return n[r].exports}for(var o="function"==typeof require&&require,r=0;r<i.length;r++)a(i[r]);return a}({1:[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=e("./canvas.es6"),s=i(r),c=e("./player.es6"),u=i(c),l=function(){function e(t,n){a(this,e),this.canvas=new s.default,this.setupCanvas(),this.player=new u.default(this.canvas),this.setupPlayer()}return o(e,[{key:"setupCanvas",value:function(){this.canvas.setCanvas("#game");var e=window.innerWidth,t=window.innerHeight;this.canvas.setDimensions(e,t)}},{key:"setupPlayer",value:function(){this.player.start()}},{key:"draw",value:function(){this.canvas.context.clearRect(0,0,this.canvas.canvas.width,this.canvas.canvas.height),this.player.draw(this.canvas.context)}},{key:"render",value:function(){var e=this;setInterval(function(){e.draw()},1e3/60)}}]),e}();document.addEventListener("DOMContentLoaded",function(e){var t=new l(0,0);t.render(),console.log("Hello world!")})},{"./canvas.es6":2,"./player.es6":3}],2:[function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(){i(this,e),console.log("Setting up canvas")}return a(e,[{key:"setCanvas",value:function(e){this.canvas=document.querySelector(e),this.context=this.canvas.getContext("2d")}},{key:"setDimensions",value:function(e,t){this.canvas.width=e,this.canvas.height=t,this.checkRetina()}},{key:"checkRetina",value:function(){if(window.devicePixelRatio>1){var e=this.canvas.width,t=this.canvas.height;this.canvas.width=e*window.devicePixelRatio,this.canvas.height=t*window.devicePixelRatio,this.canvas.style.width=e+"px",this.canvas.style.height=t+"px",this.context.scale(window.devicePixelRatio,window.devicePixelRatio)}}},{key:"draw",value:function(){this.context.moveTo(0,0),this.context.lineTo(200,100),this.context.stroke()}}]),e}();n.default=o},{}],3:[function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e){console.log(e)}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(t){i(this,e),this.canvas=t,this.position={x:100,y:100}}return o(e,[{key:"start",value:function(){this.watchKeys()}},{key:"watchKeys",value:function(){var e=this;window.onkeydown=function(t){switch(t.which){case 37:a("left"),e.position.x--;break;case 38:a("up"),e.position.y--;break;case 39:a("right"),e.position.x++;break;case 40:a("down"),e.position.y++;break;default:return}t.preventDefault()}}},{key:"draw",value:function(e){e.beginPath(),e.arc(this.position.x,this.position.y,40,0,2*Math.PI),e.fillStyle="red",e.fill(),e.stroke()}}]),e}();n.default=r},{}]},{},[1]);
//# sourceMappingURL=bundle.js.map
