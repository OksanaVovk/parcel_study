!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function n(t,e,n,r,i,o,s){try{var a=t[o](s),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,i)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var s=t.apply(e,r);function a(t){n(s,i,o,a,c,"next",t)}function c(t){n(s,i,o,a,c,"throw",t)}a(void 0)}))}};var r={},i=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof y?e:y,o=Object.create(i.prototype),s=new S(r||[]);return o._invoke=function(t,e,n){var r=h;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw o;return O()}for(n.method=i,n.arg=o;;){var s=n.delegate;if(s){var a=C(s,n);if(a){if(a===g)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?d:p,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}(t,n,s),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h="suspendedStart",p="suspendedYield",f="executing",d="completed",g={};function y(){}function v(){}function m(){}var b={};c(b,o,(function(){return this}));var k=Object.getPrototypeOf,w=k&&k(k(T([])));w&&w!==n&&r.call(w,o)&&(b=w);var L=m.prototype=y.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function n(i,o,s,a){var c=l(t[i],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,a)}),(function(t){n("throw",t,s,a)})):e.resolve(h).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,a)}))}a(c.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}}function C(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,C(t,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function T(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,s=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return s.next=s}}return{next:O}}function O(){return{value:e,done:!0}}return v.prototype=m,c(L,"constructor",m),c(m,"constructor",v),v.displayName=c(m,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,a,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},_(P.prototype),c(P.prototype,s,(function(){return this})),t.AsyncIterator=P,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var s=new P(u(e,n,r,i),o);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},_(L),c(L,a,"Generator"),c(L,o,(function(){return this})),c(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return a.type="throw",a.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;E(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}(r);try{regeneratorRuntime=i}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var s={};function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(t,e,n){e&&a(t.prototype,e);n&&a(t,n);return t};var c=function(){"use strict";function n(){t(o)(this,n),this.searchQuery="",this.page=1}return t(s)(n,[{key:"fetchFilms",value:function(){var n=this;return t(e)(t(r).mark((function i(){var o,s,a,c,u;return t(r).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return s="https://api.themoviedb.org/3/search/movie?api_key=".concat(o="024bf82d4805f650033dc69997860333","&language=en-US&page=1&include_adult=false&query=").concat(n.searchQuery,"&page=").concat(n.page),a="https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(o,"&language=en-US"),c=[s,a].map(function(){var n=t(e)(t(r).mark((function e(n){var i;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(n));case 2:return i=t.sent,t.abrupt("return",i.json());case 4:case"end":return t.stop()}}),e)})));return function(t){return n.apply(this,arguments)}}()),i.next=7,Promise.all(c);case 7:return u=i.sent,i.abrupt("return",u);case 9:case"end":return i.stop()}}),i)})))()}},{key:"query",get:function(){return this.searchQuery},set:function(t){this.searchQuery=t}},{key:"resetPage",value:function(){this.page=1}},{key:"incrementPage",value:function(){this.page+=1}},{key:"decrementPage",value:function(){this.page-=1}},{key:"setPage",value:function(t){this.page=t}}]),n}(),u=function(){"use strict";function n(){t(o)(this,n),this.page=1}return t(s)(n,[{key:"fetchFilms",value:function(){var n=this;return t(e)(t(r).mark((function i(){var o,s,a,c,u;return t(r).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return s="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o="024bf82d4805f650033dc69997860333","&page=").concat(n.page),a="https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(o,"&language=en-US"),c=[s,a].map(function(){var n=t(e)(t(r).mark((function e(n){var i;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(n));case 2:return i=t.sent,t.abrupt("return",i.json());case 4:case"end":return t.stop()}}),e)})));return function(t){return n.apply(this,arguments)}}()),i.next=7,Promise.all(c);case 7:return u=i.sent,i.abrupt("return",u);case 9:case"end":return i.stop()}}),i)})))()}},{key:"resetPage",value:function(){this.page=1}},{key:"incrementPage",value:function(){this.page+=1}},{key:"decrementPage",value:function(){this.page-=1}},{key:"setPage",value:function(t){this.page=t}}]),n}();function l(t){var e=t[0].results,n=t[1].genres;return e.map((function(t){var e=t.original_title,r=t.poster_path,i=t.original_name,o=t.genre_ids,s=t.release_date,a=t.id;return'<div class="film-card">\n        <img src="https://image.tmdb.org/t/p/w500'.concat(r,'"  alt="" loading="lazy" data-id=').concat(a,' />\n        <div class="info">\n          <p class="film-name">').concat(e||i,'\n          </p>\n          <p class="info-item">\n            <b>').concat(n.reduce((function(t,e){return o.includes(e.id)&&t.push(" ".concat(e.name)),t}),[]).slice(0,2).concat([" Other"])," </b >\n            <b>|</b>\n            <b>").concat(s?s.slice(0,4):"-","</b>\n          </p>\n        </div>\n      </div>")})).join("")}function h(t){var e=t.vote_average,n=t.vote_count,r=t.genres,i=t.original_title,o=t.poster_path,s=t.original_name,a=t.popularity,c=t.overview,u=t.id;return console.log(r),'<div class="about_film-card">\n         <img src="https://image.tmdb.org/t/p/w500'.concat(o,'" class="about_film-img" alt="" loading="lazy" data-id=').concat(u,' />\n        <div class="about_film-info">\n          <h1 class="about_film-name">').concat(i||s,'\n          </h1>\n          <div class="about_film-item">\n          <p class="about_film-text">Vote / Votes</p>\n          <b class="about_film-date">').concat(e," / ").concat(n,'</b>\n          </div>\n          <div class="about_film-item">\n          <p class="about_film-text">Popularity</p>\n          <b class="about_film-date">').concat(a,'</b>\n          </div>\n          <div class="about_film-item">\n          <p class="about_film-text">Original Title</p>\n          <b class="about_film-date">').concat(i||s,'</b>\n          </div>\n          <div class="about_film-item">\n          <p class="about_film-text">Genre</p>\n          <b class="about_film-date">').concat(r?r.map((function(t){return t.name})):" ",'</b>\n          </div>\n          <h2 class="about_film-pretitle">ABOUT</h2>\n          <p class="about_film-overview">').concat(c,"</p>\n        </div>\n      </div>")}function p(t){return f.apply(this,arguments)}function f(){return(f=t(e)(t(r).mark((function e(n){var i,o,s;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"024bf82d4805f650033dc69997860333",i="https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat("024bf82d4805f650033dc69997860333"),console.log(i),t.next=5,fetch(i);case 5:return o=t.sent,t.next=8,o.json();case 8:return s=t.sent,t.abrupt("return",s);case 10:case"end":return t.stop()}}),e)})))).apply(this,arguments)}var d,g={};
/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.12
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */d=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}return n.m=t,n.c=e,n.p="",n(0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(1),o=n(3),s=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i.initializer.load(this,n,e),this.begin()}return r(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)}),this.startDelay)}},{key:"typewrite",value:function(t,e){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var r=this.humanizer(this.typeSpeed),i=1;!0!==this.pause.status?this.timeout=setTimeout((function(){e=o.htmlParser.typeHtmlChars(t,e,n);var r=0,s=t.substr(e);if("^"===s.charAt(0)&&/^\^\d+/.test(s)){var a=1;a+=(s=/\d+/.exec(s)[0]).length,r=parseInt(s),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,e)+t.substring(e+a),n.toggleBlinking(!0)}if("`"===s.charAt(0)){for(;"`"!==t.substr(e+i).charAt(0)&&(i++,!(e+i>t.length)););var c=t.substring(0,e),u=t.substring(c.length+1,e+i),l=t.substring(e+i+1);t=c+u+l,i--}n.timeout=setTimeout((function(){n.toggleBlinking(!1),e>=t.length?n.doneTyping(t,e):n.keepTyping(t,e,i),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))}),r)}),r):this.setPauseStatus(t,e,!0)}},{key:"keepTyping",value:function(t,e,n){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=n;var r=t.substr(0,e);this.replaceText(r),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){n.backspace(t,e)}),this.backDelay))}},{key:"backspace",value:function(t,e){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var r=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){e=o.htmlParser.backSpaceHtmlChars(t,e,n);var r=t.substr(0,e);if(n.replaceText(r),n.smartBackspace){var i=n.strings[n.arrayPos+1];i&&r===i.substr(0,e)?n.stopNum=e:n.stopNum=0}e>n.stopNum?(e--,n.backspace(t,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))}),r)}else this.setPauseStatus(t,e,!1)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)}),this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",(function(e){t.stop()})),this.el.addEventListener("blur",(function(e){t.el.value&&0!==t.el.value.length||t.start()})))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),t}();e.default=s,t.exports=e.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(2),a=(r=s)&&r.__esModule?r:{default:r},c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return o(t,[{key:"load",value:function(t,e,n){if(t.el="string"==typeof n?document.querySelector(n):n,t.options=i({},a.default,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map((function(t){return t.trim()})),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var r=Array.prototype.slice.apply(t.stringsElement.children),o=r.length;if(o)for(var s=0;s<o;s+=1){var c=r[s];t.strings.push(c.innerHTML.trim())}}for(var s in t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.strings)t.sequence[s]=s;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){var e="data-typed-js-css";if(t.autoInsertCss&&(t.showCursor||t.fadeOut)&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.type="text/css",n.setAttribute(e,!0);var r="";t.showCursor&&(r+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(r+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==n.length&&(n.innerHTML=r,document.body.appendChild(n))}}}]),t}();e.default=c;var u=new c;e.initializer=u},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}};e.default=n,t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return n(t,[{key:"typeHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var r=t.substr(e).charAt(0);if("<"===r||"&"===r){var i="";for(i="<"===r?">":";";t.substr(e+1).charAt(0)!==i&&!(1+ ++e>t.length););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var r=t.substr(e).charAt(0);if(">"===r||";"===r){var i="";for(i=">"===r?"<":"&";t.substr(e-1).charAt(0)!==i&&!(--e<0););e--}return e}}]),t}();e.default=r;var i=new r;e.htmlParser=i}])},g=d();var y=new c,v=new u,m=document.querySelector(".button_all"),b=document.querySelector(".films_all"),k=document.querySelector(".backdrop"),w=document.querySelector(".modal_film-info"),L=document.querySelector(".modal__button--close"),_=document.querySelector(".search-form"),P=document.querySelector(".pagination");function C(){return(C=t(e)(t(r).mark((function e(){var n,i,o,s;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x(),v.resetPage(),t.prev=2,t.next=5,v.fetchFilms();case 5:n=t.sent,console.log(n),i=n[0].total_pages,console.log(i),o=q(i),P.innerHTML=o,P.firstChild.classList.add("is-hidden"),P.children[v.page].classList.add("active"),s=l(n),b.insertAdjacentHTML("afterbegin",s),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(2),console.log(t.t0.message);case 20:P.removeEventListener("click",B),P.addEventListener("click",M);case 22:case"end":return t.stop()}}),e,null,[[2,17]])})))).apply(this,arguments)}function x(){b.innerHTML=""}m.addEventListener("click",(function(){return C.apply(this,arguments)})),b.addEventListener("click",(function(t){if(w.innerHTML="",console.log(t.target),console.log(t.currentTarget),!t.target.dataset.id)return;console.log(t.target.dataset.id),p(t.target.dataset.id).then((function(t){if(console.log(t),!t)return alert("The resource you requested could not be found.");T.setAttribute("data-id","".concat(t.id)),O.setAttribute("data-id","".concat(t.id));var e=h(t);k.classList.remove("is-hidden"),k.addEventListener("click",j),document.addEventListener("keydown",N),document.body.classList.toggle("modal-open"),w.insertAdjacentHTML("beforeend",e)})).catch((function(t){return console.log(t)}))})),L.addEventListener("click",(function(){k.classList.add("is-hidden"),document.body.classList.toggle("modal-open")})),_.addEventListener("submit",(function(e){e.preventDefault(),x(),y.query=e.currentTarget.elements.searchQuery.value.trim(),console.log(y.searchQuery),""===y.query&&new(t(g))(".text_error",{strings:["Search result not successful. Enter the correct movie name and "," "],typeSpeed:20,backSpeed:20,backDelay:2e3,showCursor:!1,loop:!0,loopCount:1});y.resetPage(),y.fetchFilms().then((function(t){console.log(t);var e=t[0].results,n=t[1].genres;if(console.log(e),console.log(n),0===e.length)return alert("Sorry, there are no images matching your search query. Please try again.");var r=l(t);b.insertAdjacentHTML("afterbegin",r);var i=t[0].total_pages;console.log(i);var o=q(i);P.innerHTML=o,P.firstChild.classList.add("is-hidden"),P.children[y.page].classList.add("active")})).catch((function(t){return console.log(t)})),P.removeEventListener("click",M),P.addEventListener("click",B)}));var E="add-to-watchet-id",S=[],T=document.querySelector(".modal__button--watched"),O=document.querySelector(".modal__button--queue");function j(){k.classList.add("is-hidden"),document.body.classList.toggle("modal-open"),k.removeEventListener("click",j)}function N(t){"Escape"===t.code&&(k.classList.add("is-hidden"),document.body.classList.toggle("modal-open"),document.removeEventListener("keydown",N))}function q(t){for(var e=[],n=1;n<=t;n+=1)1===t?e=[]:(t<=10||(t=10),e.push('<button type="button" class="btn_page" data-page="'.concat(n,'">').concat(n,"</button>")));return e.unshift('<button type="button" class="arrow_left" data-page="arrow_left">&#129044;</button>'),e.push(' <button type="button" class="arrow_right" data-page="arrow_right">&#129046;</button>'),e.join("")}function M(t){return A.apply(this,arguments)}function A(){return(A=t(e)(t(r).mark((function e(n){var i,o,s,a;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x(),i=n.target.dataset.page,console.dir(i),console.dir(n.target),"arrow_left"===i?v.decrementPage():"arrow_right"===i?v.incrementPage():v.setPage(i),v.page<=1?(v.setPage(1),P.firstChild.classList.add("is-hidden"),P.lastChild.classList.remove("is-hidden")):v.page>=P.children.length-2?(v.setPage(P.children.length-2),P.firstChild.classList.remove("is-hidden"),P.lastChild.classList.add("is-hidden")):(P.firstChild.classList.remove("is-hidden"),P.lastChild.classList.remove("is-hidden")),console.log(v.page),t.prev=7,t.next=10,v.fetchFilms();case 10:for(o=t.sent,console.log(o),s=l(o),b.insertAdjacentHTML("beforeend",s),a=0;a<P.children.length;a+=1)P.children[a].classList.remove("active");P.children[o[0].page].classList.add("active"),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(7),console.log(t.t0.message);case 21:case"end":return t.stop()}}),e,null,[[7,18]])})))).apply(this,arguments)}function B(t){return I.apply(this,arguments)}function I(){return(I=t(e)(t(r).mark((function e(n){var i,o,s,a;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x(),i=n.target.dataset.page,console.dir(i),console.dir(n.target),"arrow_left"===i?y.decrementPage():"arrow_right"===i?y.incrementPage():y.setPage(i),y.page<=1?(y.setPage(1),P.firstChild.classList.add("is-hidden"),P.lastChild.classList.remove("is-hidden")):y.page>=P.children.length-2?(y.setPage(P.children.length-2),P.firstChild.classList.remove("is-hidden"),P.lastChild.classList.add("is-hidden")):(P.firstChild.classList.remove("is-hidden"),P.lastChild.classList.remove("is-hidden")),console.log(y.page),t.prev=7,t.next=10,y.fetchFilms();case 10:for(o=t.sent,console.log(o),s=l(o),b.insertAdjacentHTML("beforeend",s),a=0;a<P.children.length;a+=1)P.children[a].classList.remove("active");P.children[o[0].page].classList.add("active"),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(7),console.log(t.t0.message);case 21:case"end":return t.stop()}}),e,null,[[7,18]])})))).apply(this,arguments)}T.addEventListener("click",(function(t){if(console.dir(t.target.dataset.id),localStorage.getItem(E)){var e=JSON.parse(localStorage.getItem(E));e.push(t.target.dataset.id),localStorage.setItem(E,JSON.stringify(e))}else S.push(t.target.dataset.id),localStorage.setItem(E,JSON.stringify(S))}))}();
//# sourceMappingURL=index.b788e60a.js.map
