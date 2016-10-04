!function t(e,i,s){function n(o,r){if(!i[o]){if(!e[o]){var h="function"==typeof require&&require;if(!r&&h)return h(o,!0);if(a)return a(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var u=i[o]={exports:{}};e[o][0].call(u.exports,function(t){var i=e[o][1][t];return n(i?i:t)},u,u.exports,t,e,i,s)}return i[o].exports}for(var a="function"==typeof require&&require,o=0;o<s.length;o++)n(s[o]);return n}({1:[function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),o=t("./canvas.es6"),r=s(o),h=t("./player.es6"),c=s(h),u=t("./particleSystem.es6"),l=s(u),f=function(){function t(e,i){n(this,t),this.canvas=new r.default,this.setupCanvas(),this.particleSystem=new l.default(this.canvas),this.setupParticleSystem(),this.player=new c.default(this.canvas),this.setupPlayer()}return a(t,[{key:"setupCanvas",value:function(){this.canvas.setCanvas("#game");var t=window.innerWidth,e=window.innerHeight;this.canvas.setDimensions(t,e)}},{key:"setupParticleSystem",value:function(){this.particleSystem.start()}},{key:"setupPlayer",value:function(){this.player.start(this.particleSystem)}},{key:"draw",value:function(){this.canvas.context.clearRect(0,0,this.canvas.canvas.width,this.canvas.canvas.height),this.player.draw(this.canvas.context),this.particleSystem.draw(this.canvas.context)}},{key:"render",value:function(){var t=this;setInterval(function(){t.draw()},1e3/60)}}]),t}();document.addEventListener("DOMContentLoaded",function(t){var e=new f(0,0);e.render(),console.log("Hello world!")})},{"./canvas.es6":3,"./particleSystem.es6":5,"./player.es6":6}],2:[function(t,e,i){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t){return t*(Math.PI/180)}Object.defineProperty(i,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),o=function(){function t(e,i,a){s(this,t),this.position={x:0,y:0},this.width=5,a?this.angle=a:this.angle=n(Math.floor(360*Math.random())),this.speed=Math.round(20*Math.random()+5),this.update=this.update.bind(this),this.startTime=Date.now(),this.remove=!1,this.cwidth=e,this.cheight=i}return a(t,[{key:"setStartPosition",value:function(t,e){this.position.x=t,this.position.y=e}},{key:"update",value:function(t){this.getCollision(t),this.position.x<0&&(this.speed>0?this.speed=-this.speed:this.speed=Math.abs(this.speed)),this.position.x>this.cwidth&&(this.speed>0?this.speed=-this.speed:this.speed=Math.abs(this.speed)),this.position.y<0&&(this.speed>0?this.speed=-this.speed:this.speed=Math.abs(this.speed)),this.position.y>this.cheight&&(this.speed>0?this.speed=-this.speed:this.speed=Math.abs(this.speed)),this.position.x+=this.speed*Math.cos(this.angle),this.position.y+=this.speed*Math.sin(this.angle),this.position.x-this.width/2>this.cwidth&&(this.remove=!0)}},{key:"getCollision",value:function(t){var e=0,i=!0,s=!1,n=void 0;try{for(var a,o=t[Symbol.iterator]();!(i=(a=o.next()).done);i=!0){var r=a.value,h={X:r.position.x,Y:r.position.y,W:10,H:10},c={X:this.position.x,Y:this.position.y,W:this.width,H:this.width};h.X<c.X+c.W&&h.X+h.W>c.X&&h.Y<c.Y+c.H&&h.H+h.Y>c.Y&&(r.alive=!1),e++}}catch(t){s=!0,n=t}finally{try{!i&&o.return&&o.return()}finally{if(s)throw n}}}},{key:"draw",value:function(t){t.beginPath(),t.arc(this.position.x,this.position.y,this.width,0,2*Math.PI),t.fillStyle="yellow",t.fill(),t.stroke()}}]),t}();i.default=o},{}],3:[function(t,e,i){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),a=function(){function t(){s(this,t),console.log("Setting up canvas")}return n(t,[{key:"setCanvas",value:function(t){this.canvas=document.querySelector(t),this.context=this.canvas.getContext("2d")}},{key:"setDimensions",value:function(t,e){this.canvas.width=t,this.canvas.height=e,this.checkRetina()}},{key:"checkRetina",value:function(){if(window.devicePixelRatio>1){var t=this.canvas.width,e=this.canvas.height;this.canvas.width=t*window.devicePixelRatio,this.canvas.height=e*window.devicePixelRatio,this.canvas.style.width=t+"px",this.canvas.style.height=e+"px",this.context.scale(window.devicePixelRatio,window.devicePixelRatio)}}},{key:"draw",value:function(){this.context.moveTo(0,0),this.context.lineTo(200,100),this.context.stroke()}}]),t}();i.default=a},{}],4:[function(t,e,i){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),a=function(){function t(e){s(this,t),this.canvas=e,this.position={x:this.canvas.canvas.offsetWidth/2,y:this.canvas.canvas.offsetHeight/2},this.speed={x:10*Math.random()-2,y:10*Math.random()-2},this.alive=!0}return n(t,[{key:"update",value:function(){this.position.x<0&&(this.speed.x>0?this.speed.x=-this.speed.x:this.speed.x=Math.abs(this.speed.x)),this.position.x>this.canvas.canvas.offsetWidth&&(this.speed.x>0?this.speed.x=-this.speed.x:this.speed.x=Math.abs(this.speed.x)),this.position.y<0&&(this.speed.y>0?this.speed.y=-this.speed.y:this.speed.y=Math.abs(this.speed.y)),this.position.y>this.canvas.canvas.offsetHeight&&(this.speed.y>0?this.speed.y=-this.speed.y:this.speed.y=Math.abs(this.speed.y)),this.position.x+=this.speed.x,this.position.y+=this.speed.y}},{key:"getCollition",value:function(){}},{key:"draw",value:function(t){this.alive&&(t.beginPath(),t.fillStyle="green",t.arc(this.position.x,this.position.y,10,0,2*Math.PI,!0),t.closePath(),t.fill())}}]),t}();i.default=a},{}],5:[function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),o=t("./particle.es6"),r=s(o),h=function(){function t(e){n(this,t),this.canvas=e,this.particles=[],this.particleIndex=0}return a(t,[{key:"start",value:function(){this.createParticles()}},{key:"draw",value:function(t){var e=!0,i=!1,s=void 0;try{for(var n,a=this.particles[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){var o=n.value;o.draw(t),o.update()}}catch(t){i=!0,s=t}finally{try{!e&&a.return&&a.return()}finally{if(i)throw s}}}},{key:"createParticles",value:function(){this.life=0;for(var t=0;t<100;t++){var e=new r.default(this.canvas);this.particles.push(e),this.particleIndex++}console.log(this.particleIndex)}}]),t}();i.default=h},{"./particle.es6":4}],6:[function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t){}Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),r=t("./bullet.es6"),h=s(r),c=function(){function t(e){n(this,t),this.canvas=e,this.keys={left:!1,right:!1,up:!1,down:!1,space:!1},this.bullets=[],this.position={x:this.canvas.canvas.offsetWidth/2,y:this.canvas.canvas.offsetHeight/2},this.cursor={x:0,y:0,mousedown:!1},this.handleCursor=this.handleCursor.bind(this),this.fireBullet=this.fireBullet.bind(this)}return o(t,[{key:"start",value:function(t){this.enemies=t.particles,this.watchKeys(),this.watchCursor()}},{key:"watchKeys",value:function(){var t=this;window.onkeydown=function(e){switch(e.which){case 37:case 65:t.keys.left=!0;break;case 38:case 87:t.keys.up=!0;break;case 39:case 68:t.keys.right=!0;break;case 40:case 83:t.keys.down=!0;break;case 32:t.keys.space=!0}},window.onkeyup=function(e){switch(e.which){case 37:case 65:t.keys.left=!1;break;case 38:case 87:t.keys.up=!1;break;case 39:case 68:t.keys.right=!1;break;case 40:case 83:t.keys.down=!1;break;case 32:t.cursor.mousedown=!1,t.keys.space=!1}},this.canvas.canvas.addEventListener("click",this.handleCursor)}},{key:"watchCursor",value:function(){var t=this,e=0;document.body.onmousedown=function(){e=1},document.body.onmouseup=function(){e=0};var i=0,s=0;this.canvas.canvas.addEventListener("mousemove",function(n){i=n.clientX,s=n.clientY,t.cursor={x:i,y:s,mousedown:e}})}},{key:"handleCursor",value:function(t){if(this.cursor.mousedown){var e=Math.atan2(this.cursor.y-this.position.y,this.cursor.x-this.position.x);this.fireBullet(e)}}},{key:"handleKeys",value:function(){var t=3;this.keys.left&&(a("left"),this.position.x-=t),this.keys.up&&(a("up"),this.position.y-=t),this.keys.right&&(a("right"),this.position.x+=t),this.keys.down&&(a("down"),this.position.y+=t),this.keys.space&&(a("space"),this.cursor.mousedown=!0)}},{key:"fireBullet",value:function(t){var e=new h.default(this.canvas.canvas.offsetWidth,this.canvas.canvas.offsetHeight,t);e.setStartPosition(this.position.x,this.position.y),this.bullets.push(e)}},{key:"draw",value:function(t){this.handleKeys(),this.handleCursor();var e=0,i=!0,s=!1,n=void 0;try{for(var a,o=this.bullets[Symbol.iterator]();!(i=(a=o.next()).done);i=!0){var r=a.value;r.remove&&this.bullets.splice(e,1),r.update(this.enemies),r.draw(t),e++}}catch(t){s=!0,n=t}finally{try{!i&&o.return&&o.return()}finally{if(s)throw n}}t.beginPath(),t.arc(this.position.x,this.position.y,20,0,2*Math.PI),t.fillStyle="red",t.fill(),t.stroke()}}]),t}();i.default=c},{"./bullet.es6":2}]},{},[1]);
//# sourceMappingURL=bundle.js.map
