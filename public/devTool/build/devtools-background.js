(function(e){var n={};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=260)})({260:function(e,n){var o,t=!1,r=!1,u=!1,i=0;chrome.devtools.network.onNavigated.addListener(a);var c=setInterval(a,1e3);function a(){u||i++>10?clearInterval(c):(t=!1,r=!1,chrome.devtools.inspectedWindow.eval("!!(window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue)",function(e){e&&!u&&(clearInterval(c),u=!0,chrome.devtools.panels.create("Vue","icons/128.png","devtools.html",e=>{e.onShown.addListener(v),e.onHidden.addListener(p)}))}))}function l(e){var n=e.id;if("vue-inspect-instance"===n){var t="window.__VUE_DEVTOOLS_CONTEXT_MENU_HAS_TARGET__";chrome.devtools.inspectedWindow.eval(t,function(e,n){n&&console.log(n),"undefined"!==typeof e&&e?s(()=>{chrome.runtime.sendMessage("vue-get-context-menu-target")},"open-devtools"):(o=null,_("component-not-found"))})}}function s(e,n=null){u&&t&&r?e():(o=e,n&&_(n))}function d(){o&&o(),o=null}function f(){d(),t=!0}function v(){chrome.runtime.sendMessage("vue-panel-shown"),r=!0,t&&d()}function p(){chrome.runtime.sendMessage("vue-panel-hidden"),r=!1}a(),chrome.runtime.onMessage.addListener(e=>{"vue-panel-load"===e?f():e.vueToast?_(e.vueToast):e.vueContextMenu&&l(e.vueContextMenu)});var m={"open-devtools":{message:"Open Vue devtools to see component details",type:"normal"},"component-not-found":{message:"No Vue component was found",type:"warn"}};function _(e){if(Object.keys().includes(e)){var{message:n,type:o}=m[e],t=`(function() {\n    __VUE_DEVTOOLS_TOAST__(\`${n}\`, '${o}');\n  })()`;chrome.devtools.inspectedWindow.eval(t,function(e,n){n&&console.log(n)})}}}});