!function(t,e){for(var n in e)t[n]=e[n]}(window,function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=303)}({18:function(t,e,n){var r=n(65),i=n(66),o=n(67);t.exports=function(t,e){return r(t)||i(t,e)||o()}},19:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"h",(function(){return o})),n.d(e,"i",(function(){return c})),n.d(e,"j",(function(){return u})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return f})),n.d(e,"f",(function(){return h})),n.d(e,"g",(function(){return d}));var r=["image"],i=4,o=20,c=20,u=2e3,a="circle",s="columns",f="rectangular",h="square",d=[{isDefault:!0,name:f},{name:a},{name:h},{name:s}]},303:function(t,e,n){n(43),t.exports=n(304)},304:function(t,e,n){"use strict";n.r(e);var r=n(75),i=n.n(r),o=(n(305),n(39)),c=n(62);function u(t){u.pendingRaf&&cancelAnimationFrame(u.pendingRaf),u.pendingRaf=requestAnimationFrame((function(){u.pendingRaf=null;var e=!0,n=!1,r=void 0;try{for(var i,o=function(){var t=i.value,e=t.contentRect.width;Array.from(t.target.querySelectorAll(".tiled-gallery__row")).forEach((function(t){return Object(c.b)(t,e)}))},a=t[Symbol.iterator]();!(e=(i=a.next()).done);e=!0)o()}catch(s){n=!0,r=s}finally{try{e||null==a.return||a.return()}finally{if(n)throw r}}}))}"undefined"!=typeof window&&i()((function(){var t=Array.from(document.querySelectorAll(".wp-block-jetpack-tiled-gallery.is-style-rectangular > .tiled-gallery__gallery,.wp-block-jetpack-tiled-gallery.is-style-columns > .tiled-gallery__gallery"));if(0!==t.length){var e=new o.a(u);t.forEach((function(t){return e.observe(t)}))}}))},305:function(t,e,n){},36:function(t,e,n){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&(n.p=window.Jetpack_Block_Assets_Base_Url)},39:function(t,e,n){"use strict";var r=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return(function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}())}(),i="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,o="undefined"!=typeof window&&window.Math===Math?window:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),c="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var u=["top","right","bottom","left","width","height","size","weight"],a="undefined"!=typeof MutationObserver,s=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function o(){n&&(n=!1,t()),r&&a()}function u(){c(o)}function a(){var t=Date.now();if(n){if(t-i<2)return;r=!0}else n=!0,r=!1,setTimeout(u,e);i=t}return a}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),a?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;u.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),f=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},h=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||o},d=y(0,0,0,0);function l(t){return parseFloat(t)||0}function p(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+l(t["border-"+n+"-width"])}),0)}function v(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return d;var r=h(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=l(o)}return e}(r),o=i.left+i.right,c=i.top+i.bottom,u=l(r.width),a=l(r.height);if("border-box"===r.boxSizing&&(Math.round(u+o)!==e&&(u-=p(r,"left","right")+o),Math.round(a+c)!==n&&(a-=p(r,"top","bottom")+c)),!function(t){return t===h(t).document.documentElement}(t)){var s=Math.round(u+o)-e,f=Math.round(a+c)-n;1!==Math.abs(s)&&(u-=s),1!==Math.abs(f)&&(a-=f)}return y(i.left,i.top,u,a)}var _="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof h(t).SVGGraphicsElement}:function(t){return t instanceof h(t).SVGElement&&"function"==typeof t.getBBox};function b(t){return i?_(t)?function(t){var e=t.getBBox();return y(0,0,e.width,e.height)}(t):v(t):d}function y(t,e,n,r){return{x:t,y:e,width:n,height:r}}var m=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=y(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=b(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),w=function(t,e){var n,r,i,o,c,u,a,s=(r=(n=e).x,i=n.y,o=n.width,c=n.height,u="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(u.prototype),f(a,{x:r,y:i,width:o,height:c,top:i,right:r+o,bottom:c+i,left:r}),a);f(this,{target:t,contentRect:s})},g=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof h(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new m(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof h(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new w(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),E="undefined"!=typeof WeakMap?new WeakMap:new r,O=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=s.getInstance(),r=new g(e,n,this);E.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){O.prototype[t]=function(){var e;return(e=E.get(this))[t].apply(e,arguments)}}));var A=void 0!==o.ResizeObserver?o.ResizeObserver:O;e.a=A},43:function(t,e,n){"use strict";n.r(e);n(36)},62:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return a}));var r=n(18),i=n.n(r),o=n(19);function c(t,e){var n=(e-t.reduce((function(t,e){return t+e}),0))/t.length;return t.map((function(t){return t+n}))}function u(t,e){!function(t,e,n){var r=i()(e,2),u=r[0],a=r[1],l=1/u*(n-o.b*(t.childElementCount-1)-a);!function(t,e){var n=e.rawHeight,r=e.rowWidth,i=s(t),u=i.map((function(t){return(n-o.b*(t.childElementCount-1))*h(t)[0]})),a=c(u,r);i.forEach((function(t,e){var r=u[e],i=a[e];!function(t,e){var n=e.colHeight,r=e.width,i=e.rawWidth,o=c(f(t).map((function(t){return i/d(t)})),n);Array.from(t.children).forEach((function(t,e){var n=o[e];t.setAttribute("style","height:".concat(n,"px;width:").concat(r,"px;"))}))}(t,{colHeight:n-o.b*(t.childElementCount-1),width:i,rawWidth:r})}))}(t,{rawHeight:l,rowWidth:n-o.b*(t.childElementCount-1)})}(t,function(t){return s(t).map(h).reduce((function(t,e){var n=i()(t,2),r=n[0],o=n[1],c=i()(e,2);return[r+c[0],o+c[1]]}),[0,0])}(t),e)}function a(t){return Array.from(t.querySelectorAll(".tiled-gallery__row"))}function s(t){return Array.from(t.querySelectorAll(".tiled-gallery__col"))}function f(t){return Array.from(t.querySelectorAll(".tiled-gallery__item > img, .tiled-gallery__item > a > img"))}function h(t){var e=f(t),n=e.length,r=1/e.map(d).reduce((function(t,e){return t+1/e}),0);return[r,r*n||1]}function d(t){var e=parseInt(t.dataset.width,10),n=parseInt(t.dataset.height,10);return e&&!Number.isNaN(e)&&n&&!Number.isNaN(n)?e/n:1}},65:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},66:function(t,e){t.exports=function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var c,u=t[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(a){i=!0,o=a}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}},67:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},75:function(t,e){!function(){t.exports=this.wp.domReady}()}}));