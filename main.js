!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=(r=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[n].concat(a).concat([i]).join("\n")}var r,c,s;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(o)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(i[r]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);o&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}},function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},function(t,e,n){"use strict";e.a=n.p+"38fb38b6ef0311f88466641d4416d321.png"},function(t,e,n){"use strict";n.r(e);n(4)},function(t,e,n){var o=n(5),i=n(6);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var a={insert:"head",singleton:!1};o(i,a);t.exports=i.locals||{}},function(t,e,n){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),r=[];function c(t){for(var e=-1,n=0;n<r.length;n++)if(r[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},o=[],i=0;i<t.length;i++){var a=t[i],s=e.base?a[0]+e.base:a[0],d=n[s]||0,u="".concat(s," ").concat(d);n[s]=d+1;var f=c(u),l={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(r[f].references++,r[f].updater(l)):r.push({identifier:u,updater:h(l,e),references:1}),o.push(u)}return o}function d(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var r=a(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var u,f=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function l(t,e,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=f(e,i);else{var a=document.createTextNode(i),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(a,r[e]):t.appendChild(a)}}function p(t,e,n){var o=n.css,i=n.media,a=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var m=null,g=0;function h(t,e){var n,o,i;if(e.singleton){var a=g++;n=m||(m=d(e)),o=l.bind(null,n,a,!1),i=l.bind(null,n,a,!0)}else n=d(e),o=p.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var i=c(n[o]);r[i].references--}for(var a=s(t,e),d=0;d<n.length;d++){var u=c(n[d]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}n=a}}}},function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),a=n(1),r=n.n(a),c=n(2),s=i()(!1),d=r()(c.a);s.push([t.i,'body,html,div{margin:0;padding:0;overflow:hidden}body{color:#f5f5f5;font-family:"Abel";background:-webkit-linear-gradient(360deg, #00537E 10%, #3AA17E 360%);background:linear-gradient(360deg, #00537E 10%, #3AA17E 360%);height:100vh;width:100vw}body h1{font-size:4em}@media(max-device-width: 1079px){body h1{font-size:2em}}body p{font-size:2.5em}@media(max-device-width: 1079px){body p{font-size:1.5em}}.content{display:flex;flex-wrap:wrap;justify-content:center}@media(orientation: landscape){.content{height:100%;width:100%}}@media(orientation: portrait){.content{height:100%;width:100%}}@media(orientation: portrait){.content{flex-direction:column}}.content section{padding:5em}@media(orientation: portrait)and (max-device-height: 1000px){.content section{padding:3em}}@media(orientation: landscape)and (max-device-width: 1079px){.content section{padding:3em}}@media(orientation: landscape)and (max-device-height: 400px){.content section{padding:0}.content section h1{margin-top:0}}.content .inner{height:75%;width:calc(100% / 3);text-align:center}@media(orientation: landscape){.content .inner{margin-bottom:auto;margin-top:auto}}@media(orientation: portrait){.content .inner{margin-left:auto;margin-right:auto;height:50%;width:100%}}.content .left{order:-1}.content .left .question{padding-bottom:0}.content .left .answer{padding-top:0;opacity:0;animation:fadeIn 1s ease-in 1.5s forwards}.content .left .languages{margin-top:.5em}.content .left .languages::after{font-family:"Caveat Brush";font-size:2em;background:-webkit-linear-gradient(#5cff00, #3AA17E);-webkit-background-clip:text;-webkit-text-fill-color:transparent;min-width:50%;content:"Html";animation:linear;animation-name:languages;animation-duration:15s;animation-iteration-count:infinite;animation-delay:2.5s}.content .right{order:2}.content .right section{max-height:50%}.content .right .contact{opacity:0;animation:slideMe 1s ease-in 4s forwards}.content .right .contact a:link,.content .right .contact a:visited,.content .right .contact a:active{color:#f5f5f5;text-decoration-line:none}@media(orientation: landscape)and (max-device-height: 400px){.content .right .contact{padding-top:10%}}.content .right .logo{height:35vh;width:auto;background-image:url('+d+');background-size:contain;background-repeat:no-repeat;background-position:center}@media(orientation: portrait)and (max-device-height: 1079px){.content .right .logo{height:25vh}}@keyframes languages{12%{content:"Css/Scss"}24%{content:"JavaScript"}36%{content:"Vue"}48%{content:"PHP"}60%{content:"C#"}72%{content:"MySql"}84%{content:"Webpack"}96%{content:"Git"}}@keyframes slideMe{0%{transform:skewX(53deg) translateX(500px);opacity:0}60%{transform:translateX(0px)}62%{transform:skewX(0deg) translateX(30px)}70%{transform:skew(-20deg);opacity:1}80%{transform:skew(0deg) translate(0)}90%{transform:skew(-5deg)}100%{transform:skew(0deg);opacity:1}}@keyframes fadeIn{100%{opacity:1}}',""]),e.default=s}]);