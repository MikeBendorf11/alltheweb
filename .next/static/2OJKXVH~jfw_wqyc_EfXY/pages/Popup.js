(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{234:function(t,e,n){__NEXT_REGISTER_PAGE("/Popup",function(){return t.exports=n(56),{page:t.exports.default}})},56:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o),i=n(6),c=n(4);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var s=function(t){function e(t){var n,o,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,(n=!(r=f(e).call(this,t))||"object"!==a(r)&&"function"!=typeof r?p(o):r).toggle=n.toggle.bind(p(p(n))),n}var n,s,y;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(e,o["Component"]),n=e,(s=[{key:"toggle",value:function(t){this.props.activatePop(t)}},{key:"render",value:function(){var t,e=this.props.content;return c.default.forEach(function(n){n.name==e&&(t=n.link)}),r.a.createElement(i.e,{isOpen:this.props.isActive,toggle:this.toggle,className:this.props.className,size:"lg",id:"dialog-"+e},r.a.createElement(i.f,{toggle:this.toggle},r.a.createElement("a",{href:t,target:"_new"}," ",t)),r.a.createElement("iframe",{src:t}))}}])&&u(n.prototype,s),y&&u(n,y),e}();e.default=s}},[[234,1,0]]]);