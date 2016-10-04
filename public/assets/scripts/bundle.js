!function t(e,i,n){function s(o,r){if(!i[o]){if(!e[o]){var c="function"==typeof require&&require;if(!r&&c)return c(o,!0);if(a)return a(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var l=i[o]={exports:{}};e[o][0].call(l.exports,function(t){var i=e[o][1][t];return s(i?i:t)},l,l.exports,t,e,i,n)}return i[o].exports}for(var a="function"==typeof require&&require,o=0;o<n.length;o++)s(n[o]);return s}({1:[function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=t("./canvas.es6"),r=n(o),c=t("./player.es6"),u=n(c),l=t("./particleSystem.es6"),h=n(l),f=function(){function t(e,i){s(this,t),this.canvas=new r.default,this.setupCanvas(),this.particleSystem=new h.default(this.canvas),this.setupParticleSystem(),this.player=new u.default(this.canvas),this.setupPlayer()}return a(t,[{key:"setupCanvas",value:function(){this.canvas.setCanvas("#game");var t=window.innerWidth,e=window.innerHeight;this.canvas.setDimensions(t,e)}},{key:"setupParticleSystem",value:function(){this.particleSystem.start()}},{key:"setupPlayer",value:function(){this.player.start(this.particleSystem)}},{key:"draw",value:function(){this.canvas.context.clearRect(0,0,this.canvas.canvas.width,this.canvas.canvas.height),this.player.draw(this.canvas.context),this.particleSystem.draw(this.canvas.context)}},{key:"render",value:function(){var t=this;setInterval(function(){t.draw()},1e3/60)}}]),t}();document.addEventListener("DOMContentLoaded",function(t){var e=new f(0,0);e.render(),console.log("Hello world!")})},{"./canvas.es6":3,"./particleSystem.es6":5,"./player.es6":6}],2:[function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t){return t*(Math.PI/180)}Object.defineProperty(i,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=function(){function t(e,i,a){n(this,t),this.position={x:0,y:0},this.width=5,a?this.angle=a:this.angle=s(Math.floor(360*Math.random())),this.speed=Math.round(20*Math.random()+5),this.update=this.update.bind(this),this.startTime=Date.now(),this.remove=!1,this.cwidth=e,this.cheight=i}return a(t,[{key:"setStartPosition",value:function(t,e){this.position.x=t,this.position.y=e}},{key:"update",value:function(t){this.getCollision(t),this.position.x+=this.speed*Math.cos(this.angle),this.position.y+=this.speed*Math.sin(this.angle),this.position.x-this.width/2>this.cwidth&&(this.remove=!0)}},{key:"getCollision",value:function(t){var e=0,i=!0,n=!1,s=void 0;try{for(var a,o=t[Symbol.iterator]();!(i=(a=o.next()).done);i=!0){var r=a.value,c=r.position.x,u=r.position.y,l=10,h=10,f=this.position.x,v=this.position.y,d=this.width,y=this.width;c<f+d&&c+l>f&&u<v+y&&h+u>v&&(console.log("collision"),r.alive=!1),e++}}catch(t){n=!0,s=t}finally{try{!i&&o.return&&o.return()}finally{if(n)throw s}}}},{key:"draw",value:function(t){t.beginPath(),t.arc(this.position.x,this.position.y,this.width,0,2*Math.PI),t.fillStyle="yellow",t.fill(),t.stroke()}}]),t}();i.default=o},{}],3:[function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=function(){function t(){n(this,t),console.log("Setting up canvas")}return s(t,[{key:"setCanvas",value:function(t){this.canvas=document.querySelector(t),this.context=this.canvas.getContext("2d")}},{key:"setDimensions",value:function(t,e){this.canvas.width=t,this.canvas.height=e,this.checkRetina()}},{key:"checkRetina",value:function(){if(window.devicePixelRatio>1){var t=this.canvas.width,e=this.canvas.height;this.canvas.width=t*window.devicePixelRatio,this.canvas.height=e*window.devicePixelRatio,this.canvas.style.width=t+"px",this.canvas.style.height=e+"px",this.context.scale(window.devicePixelRatio,window.devicePixelRatio)}}},{key:"draw",value:function(){this.context.moveTo(0,0),this.context.lineTo(200,100),this.context.stroke()}}]),t}();i.default=a},{}],4:[function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=function(){function t(e){n(this,t),this.canvas=e,this.position={x:this.canvas.canvas.offsetWidth/2,y:this.canvas.canvas.offsetHeight/2},this.speed={x:10*Math.random()-2,y:10*Math.random()-2},this.alive=!0}return s(t,[{key:"update",value:function(){this.position.x+=this.speed.x,this.position.y+=this.speed.y}},{key:"getCollition",value:function(){}},{key:"draw",value:function(t){this.alive&&(t.beginPath(),t.fillStyle="green",t.arc(this.position.x,this.position.y,10,0,2*Math.PI,!0),t.closePath(),t.fill())}}]),t}();i.default=a},{}],5:[function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=t("./particle.es6"),r=n(o),c=function(){function t(e){s(this,t),this.canvas=e,this.particles=[],this.particleIndex=0}return a(t,[{key:"start",value:function(){this.createParticles()}},{key:"draw",value:function(t){var e=!0,i=!1,n=void 0;try{for(var s,a=this.particles[Symbol.iterator]();!(e=(s=a.next()).done);e=!0){var o=s.value;o.draw(t),o.update()}}catch(t){i=!0,n=t}finally{try{!e&&a.return&&a.return()}finally{if(i)throw n}}}},{key:"createParticles",value:function(){this.life=0;for(var t=0;t<100;t++){var e=new r.default(this.canvas);this.particles.push(e),this.particleIndex++}console.log(this.particleIndex)}}]),t}();i.default=c},{"./particle.es6":4}],6:[function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t){}Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=t("./bullet.es6"),c=n(r),u=function(){function t(e){s(this,t),this.canvas=e,this.keys={left:!1,right:!1,up:!1,down:!1,space:!1},this.bullets=[],this.position={x:this.canvas.canvas.offsetWidth/2,y:this.canvas.canvas.offsetHeight/2},this.cursor={x:0,y:0,mousedown:!1},this.handleCursor=this.handleCursor.bind(this),this.fireBullet=this.fireBullet.bind(this)}return o(t,[{key:"start",value:function(t){this.enemies=t.particles,this.watchKeys(),this.watchCursor()}},{key:"watchKeys",value:function(){var t=this;window.onkeydown=function(e){switch(e.which){case 37:case 65:t.keys.left=!0;break;case 38:case 87:t.keys.up=!0;break;case 39:case 68:t.keys.right=!0;break;case 40:case 83:t.keys.down=!0;break;case 32:t.keys.space=!0}},window.onkeyup=function(e){switch(e.which){case 37:case 65:t.keys.left=!1;break;case 38:case 87:t.keys.up=!1;break;case 39:case 68:t.keys.right=!1;break;case 40:case 83:t.keys.down=!1;break;case 32:t.cursor.mousedown=!1,t.keys.space=!1}},this.canvas.canvas.addEventListener("click",this.handleCursor)}},{key:"watchCursor",value:function(){var t=this,e=0;document.body.onmousedown=function(){e=1},document.body.onmouseup=function(){e=0};var i=0,n=0;this.canvas.canvas.addEventListener("mousemove",function(s){i=s.clientX,n=s.clientY,t.cursor={x:i,y:n,mousedown:e}})}},{key:"handleCursor",value:function(t){if(this.cursor.mousedown){var e=Math.atan2(this.cursor.y-this.position.y,this.cursor.x-this.position.x);this.fireBullet(e)}}},{key:"handleKeys",value:function(){var t=3;this.keys.left&&(a("left"),this.position.x-=t),this.keys.up&&(a("up"),this.position.y-=t),this.keys.right&&(a("right"),this.position.x+=t),this.keys.down&&(a("down"),this.position.y+=t),this.keys.space&&(a("space"),this.cursor.mousedown=!0)}},{key:"fireBullet",value:function(t){var e=new c.default(this.canvas.canvas.offsetWidth,this.canvas.canvas.offsetHeight,t);e.setStartPosition(this.position.x,this.position.y),this.bullets.push(e)}},{key:"draw",value:function(t){this.handleKeys(),this.handleCursor();var e=0,i=!0,n=!1,s=void 0;try{for(var a,o=this.bullets[Symbol.iterator]();!(i=(a=o.next()).done);i=!0){var r=a.value;r.remove&&this.bullets.splice(e,1),r.update(this.enemies),r.draw(t),e++}}catch(t){n=!0,s=t}finally{try{!i&&o.return&&o.return()}finally{if(n)throw s}}t.beginPath(),t.arc(this.position.x,this.position.y,20,0,2*Math.PI),t.fillStyle="red",t.fill(),t.stroke()}}]),t}();i.default=u},{"./bullet.es6":2}]},{},[1]);
//# sourceMappingURL=bundle.js.map
