module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Popup.js":
/*!*****************************!*\
  !*** ./components/Popup.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items */ "./components/items.js");
var _jsxFileName = "C:\\Users\\mb8user\\Desktop\\Portolio-Compiled2\\components\\Popup.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Popup =
/*#__PURE__*/
function (_Component) {
  _inherits(Popup, _Component);

  function Popup(props) {
    var _this;

    _classCallCheck(this, Popup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Popup).call(this, props));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Popup, [{
    key: "toggle",
    value: function toggle(event) {
      this.props.activatePop(event);
    }
  }, {
    key: "render",
    value: function render() {
      var url;
      var id = this.props.content; // if(id){
      //   id = id.split('-')[1]    
      //   
      // }
      //console.log('id:' + id);

      _items__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(function (i) {
        i.name == id ? url = i.link : null;
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
        isOpen: this.props.isActive,
        toggle: this.toggle,
        className: this.props.className,
        size: 'lg',
        id: 'dialog-' + id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], {
        toggle: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: url,
        target: "_new",
        className: "jsx-1527947274",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, " ", url)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
        id: "ifr",
        src: url,
        className: "jsx-1527947274",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1527947274",
        css: "iframe{background-color:white;background-position:50% 50%;background-size:200px;background-repeat:no-repeat;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWI4dXNlclxcRGVza3RvcFxcUG9ydG9saW8tQ29tcGlsZWQyXFxjb21wb25lbnRzXFxQb3B1cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRFMsQUFJa0MsdUJBQ0ssNEJBQ04sc0JBQ00sNEJBQzlCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbWI4dXNlclxcRGVza3RvcFxcUG9ydG9saW8tQ29tcGlsZWQyXFxjb21wb25lbnRzXFxQb3B1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIE1vZGFsSGVhZGVyLFxyXG4gIE1vZGFsLFxyXG4gIE1vZGFsQm9keSxcclxufSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IGl0ZW1zIGZyb20gJy4vaXRlbXMnO1xyXG5cclxuY2xhc3MgUG9wdXAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHRvZ2dsZShldmVudCkge1xyXG4gICAgXHJcbiAgICB0aGlzLnByb3BzLmFjdGl2YXRlUG9wKGV2ZW50KVxyXG4gIH0gXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgXHJcbiAgICBsZXQgdXJsO1xyXG4gICAgbGV0IGlkID0gdGhpcy5wcm9wcy5jb250ZW50O1xyXG4gICAgXHJcbiAgICAvLyBpZihpZCl7XHJcbiAgICAvLyAgIGlkID0gaWQuc3BsaXQoJy0nKVsxXSAgICBcclxuICAgIC8vICAgXHJcbiAgICAvLyB9XHJcbiAgICAvL2NvbnNvbGUubG9nKCdpZDonICsgaWQpO1xyXG4gICAgaXRlbXMuZm9yRWFjaChpPT57XHJcbiAgICAgIGkubmFtZSA9PSBpZD8gdXJsID0gaS5saW5rIDogbnVsbDtcclxuICAgIH0pXHJcblxyXG5cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgaXNPcGVuPXt0aGlzLnByb3BzLmlzQWN0aXZlfVxyXG4gICAgICAgICAgdG9nZ2xlPXt0aGlzLnRvZ2dsZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9XHJcbiAgICAgICAgICBzaXplPXsnbGcnfVxyXG4gICAgICAgICAgaWQ9eydkaWFsb2ctJyArIGlkfT5cclxuICAgICAgICAgIDxNb2RhbEhlYWRlciB0b2dnbGU9e3RoaXMudG9nZ2xlfT5cclxuICAgICAgICAgICAgPGEgaHJlZj17dXJsfSB0YXJnZXQ9XCJfbmV3XCI+IHt1cmx9PC9hPlxyXG4gICAgICAgICAgPC9Nb2RhbEhlYWRlcj5cclxuICAgICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgICAgaWQ9XCJpZnJcIlxyXG4gICAgICAgICAgICBzcmM9e3VybH0+XHJcbiAgICAgICAgICA8L2lmcmFtZT5cclxuICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgIHsgICBgXHJcbiAgICAgICAgaWZyYW1le1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcHVwOyJdfQ== */\n/*@ sourceURL=C:\\Users\\mb8user\\Desktop\\Portolio-Compiled2\\components\\Popup.js */",
        __self: this
      }));
    }
  }]);

  return Popup;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./components/Slides.js":
/*!******************************!*\
  !*** ./components/Slides.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items */ "./components/items.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tooltip */ "./components/Tooltip.js");
var _jsxFileName = "C:\\Users\\mb8user\\Desktop\\Portolio-Compiled2\\components\\Slides.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Slides =
/*#__PURE__*/
function (_Component) {
  _inherits(Slides, _Component);

  function Slides(props) {
    var _this;

    _classCallCheck(this, Slides);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slides).call(this, props));
    _this.state = {
      activeIndex: 0
    };
    _this.next = _this.next.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.previous = _this.previous.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.goToIndex = _this.goToIndex.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onExiting = _this.onExiting.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onExited = _this.onExited.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Slides, [{
    key: "handleClick",
    value: function handleClick(id, event) {
      //console.log(event);
      //console.log(id);
      event.preventDefault();
      this.props.onSlideClick(id);
    }
  }, {
    key: "onExiting",
    value: function onExiting() {
      this.animating = true;
    }
  }, {
    key: "onExited",
    value: function onExited() {
      this.animating = false;
    }
  }, {
    key: "next",
    value: function next() {
      if (this.animating) return;
      var nextIndex = this.state.activeIndex === _items__WEBPACK_IMPORTED_MODULE_0__["default"].length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({
        activeIndex: nextIndex
      });
    }
  }, {
    key: "previous",
    value: function previous() {
      if (this.animating) return;
      var nextIndex = this.state.activeIndex === 0 ? _items__WEBPACK_IMPORTED_MODULE_0__["default"].length - 1 : this.state.activeIndex - 1;
      this.setState({
        activeIndex: nextIndex
      });
    }
  }, {
    key: "goToIndex",
    value: function goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({
        activeIndex: newIndex
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var activeIndex = this.state.activeIndex;
      var arr = [];
      var order = this.props.order;

      if (order) {
        for (var i = 0; i < order.length; i++) {
          order[i] == 'a' ? arr.push(_items__WEBPACK_IMPORTED_MODULE_0__["default"][0]) : order[i] == 'n' ? arr.push(_items__WEBPACK_IMPORTED_MODULE_0__["default"][1]) : order[i] == 'c' ? arr.push(_items__WEBPACK_IMPORTED_MODULE_0__["default"][2]) : order[i] == 'd' ? arr.push(_items__WEBPACK_IMPORTED_MODULE_0__["default"][3]) : order[i] == 'j' ? arr.push(_items__WEBPACK_IMPORTED_MODULE_0__["default"][4]) : console.log('not a match');
        }
      } else {
        arr = _items__WEBPACK_IMPORTED_MODULE_0__["default"];
      } //ancdj


      var slides = arr.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselItem"], {
          onExiting: _this2.onExiting,
          onExited: _this2.onExited,
          key: item.src,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], {
          position: 'top',
          current: 'img-' + item.name,
          text: 'Click to open the app',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], {
          position: 'bottom',
          current: 'cap-' + item.name,
          text: 'Click to open the app',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          onClick: _this2.handleClick.bind(_this2, item.name),
          src: item.src,
          alt: item.altText,
          id: 'img-' + item.name,
          className: 'images',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          onClick: _this2.handleClick.bind(_this2, item.name),
          id: 'cap-' + item.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselCaption"], {
          captionText: item.caption,
          captionHeader: item.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        })));
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
        activeIndex: activeIndex,
        next: this.next,
        previous: this.previous,
        interval: this.props.interval,
        pause: "hover",
        ride: 'carousel',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, slides, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselControl"], {
        id: "controlR",
        direction: "prev",
        directionText: "Previous",
        onClickHandler: this.previous,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselControl"], {
        id: "controlL",
        direction: "next",
        directionText: "Next",
        onClickHandler: this.next,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }));
    }
  }]);

  return Slides;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Slides);

/***/ }),

/***/ "./components/Tooltip.js":
/*!*******************************!*\
  !*** ./components/Tooltip.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Example; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mb8user\\Desktop\\Portolio-Compiled2\\components\\Tooltip.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/* eslint react/no-multi-comp: 0, react/prop-types: 0 */



var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Example).call(this, props));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      tooltipOpen: false
    };
    return _this;
  }

  _createClass(Example, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        tooltipOpen: !this.state.tooltipOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var classes = 'tooltip-inner';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
        delay: {
          show: 0,
          hide: 0
        },
        autohide: false,
        placement: this.props.position,
        isOpen: this.state.tooltipOpen,
        target: this.props.current,
        toggle: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, this.props.text);
    }
  }]);

  return Example;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./components/items.js":
/*!*****************************!*\
  !*** ./components/items.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var items = [{
  name: 'a',
  src: 'static/gifs/angular2.gif',
  altText: 'Angular',
  title: 'Angular',
  caption: 'Typescript, Vue, Ionic, Axios',
  link: 'https://crypto-angular.herokuapp.com'
}, {
  name: 'n',
  src: 'static/gifs/node2.gif',
  altText: 'Node',
  title: 'Node',
  caption: 'MongoDB, Express, EJS, creating APIs',
  link: 'https://pizza-order-node.herokuapp.com'
}, {
  name: 'c',
  src: 'static/gifs/csharp2.gif',
  altText: 'C#',
  title: 'C#',
  caption: 'IIS, Mssql, .Net, Mvc, Wpf',
  link: 'https://mb11.info'
}, {
  name: 'd',
  src: 'static/gifs/design4.gif',
  altText: 'Design',
  title: 'Design',
  caption: 'Responsive, Photoshop, 3d Modeling',
  link: 'https://mb11.info/design/gallery.html'
}, {
  name: 'j',
  src: 'static/gifs/chapp2.gif',
  altText: 'Javascript',
  caption: 'Async, ES6, Jquery, PWAs, Canvas, WebGL',
  title: 'Javascript',
  link: 'https://mb11.info/chapp'
}];
/* harmony default export */ __webpack_exports__["default"] = (items);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/bootstrap.min.css */ "./static/bootstrap.min.css");
/* harmony import */ var _static_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/style.css */ "./static/style.css");
/* harmony import */ var _static_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Popup */ "./components/Popup.js");
/* harmony import */ var _components_Slides__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Slides */ "./components/Slides.js");
/* harmony import */ var _components_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Tooltip */ "./components/Tooltip.js");
var _jsxFileName = "C:\\Users\\mb8user\\Desktop\\Portolio-Compiled2\\pages\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
    _this.state = {
      isPopActive: false,
      slideInterval: 3000,
      clickedSlide: ''
    };
    _this.onSlideClick = _this.onSlideClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.activatePop = _this.activatePop.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /* Adaptive layout using Grid and percentages/fractions */
      var cont = document.querySelector('#container');
      var images = document.querySelectorAll('.images');

      function windowChange() {
        //document.body.id = 'theBody';
        var currentWidth = window.innerWidth;
        var currentHeight = window.innerHeight;
        var maxWidth = 1280;
        var minWidth = 360;
        var maxHeight = 732;
        var minHeight = 560;
        var widthRange = maxWidth - minWidth;
        var heightRange = maxHeight - minHeight;
        var sideRange = 17;
        var topRange = 5;
        var bottomRange = 12;
        var midRange = 18;
        var sideFactor = widthRange / sideRange;
        var topFactor = heightRange / topRange;
        var midFactor = heightRange / midRange;
        var bottomFactor = heightRange / bottomRange;
        var sidePercent = (maxWidth - currentWidth) / sideFactor;
        var topPercent = (maxHeight - currentHeight) / topFactor;
        var midPercent = (maxHeight - currentHeight) / midFactor;
        var bottomPercent = (maxHeight - currentHeight) / bottomFactor; //side spaces go from 17% to 0%

        cont.style.gridTemplateColumns = "".concat((17 - sidePercent).toFixed(1), "fr \n         66fr \n         ").concat((17 - sidePercent).toFixed(1), "fr"); //top and bottom go to 25%, midHeight(video) takes remaining 50%
        //midwidth is irrelevant since both sides have 0%

        cont.style.gridTemplateRows = "".concat((20 + topPercent).toFixed(1), "fr \n         ").concat((68 - midPercent).toFixed(1), "fr \n         ").concat((12 + bottomPercent).toFixed(1), "fr"); //all images height has to match mid% 

        images.forEach(function (img) {
          img.style.height = "".concat(69 - midPercent, "vh");
        });
      }

      window.onload = function () {
        windowChange();
      };

      window.onresize = function () {
        windowChange();
      };
      /*WebGL module */


      if (WEBGL.isWebGLAvailable() === false) {
        document.body.appendChild(WEBGL.getWebGLErrorMessage());
      }

      var container, controls;
      var camera, scene, renderer, light;
      init();
      animate();

      function init() {
        container = document.createElement('div');
        var linkCont = document.body;
        linkCont.appendChild(container);
        camera = new THREE.PerspectiveCamera(47, window.innerWidth / window.innerHeight, 0.25, 100);
        camera.position.set(0, 0, 10);
        controls = new THREE.OrbitControls(camera);
        controls.target.set(0, .5, 1);
        controls.update();
        var urls = [''];
        var loader = new THREE.CubeTextureLoader().setPath('static/3dmodel/');
        var background = loader.load(urls);
        scene = new THREE.Scene();
        scene.background = new THREE.Color("rgb(255, 255, 255)");
        light = new THREE.HemisphereLight(0xbbbbff, 0x444422);
        light.position.set(0, 1, 0);
        scene.add(light); // model

        var loader = new THREE.GLTFLoader().setPath('static/3dmodel/');
        loader.load('cubes.gltf', function (gltf) {
          gltf.scene.traverse(function (child) {
            if (child.isMesh) {
              child.material.envMap = background;
            }
          });
          scene.add(gltf.scene);
          var directionalLight = new THREE.DirectionalLight(0xffffff, .6);
          scene.add(directionalLight);
        }, undefined, function (e) {
          console.error(e);
        });
        renderer = new THREE.WebGLRenderer({
          antialias: true
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.gammaOutput = true;
        container.appendChild(renderer.domElement);
        window.addEventListener('resize', onWindowResize, false);
      }

      function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      } //


      function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      }
    }
  }, {
    key: "onSlideClick",
    value: function onSlideClick(id) {
      setTimeout(function () {
        var theIfr = document.querySelector('#ifr');
        console.log(theIfr);

        if (theIfr) {
          theIfr.style.backgroundImage = "url(static/gifs/loading2.gif?r=".concat(new Date().getTime(), ")");
        }
      }, 1000);
      this.setState({
        isPopActive: !this.state.isPopActive,
        slideInterval: false,
        clickedSlide: id
      });
    }
  }, {
    key: "activatePop",
    value: function activatePop(event) {
      this.setState({
        isPopActive: !this.state.isPopActive,
        slideInterval: 3000
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Portfolio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
        src: "static/3dmodel/three.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
        src: "static/3dmodel/OrbitControls.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
        src: "static/3dmodel/GLTFLoader.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
        src: "static/3dmodel/WebGL.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Slides__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onSlideClick: this.onSlideClick,
        interval: this.state.slideInterval,
        order: this.props.router.query.or,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Popup__WEBPACK_IMPORTED_MODULE_5__["default"], {
        activatePop: this.activatePop,
        isActive: this.state.isPopActive,
        content: this.state.clickedSlide,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: 'Drag or scroll this background',
        position: 'left',
        current: 'top',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: 'Drag or scroll this background',
        position: 'bottom',
        current: 'left',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: 'Drag or scroll this background',
        position: 'bottom',
        current: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var Extract = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["withRouter"])(Index);
/* harmony default export */ __webpack_exports__["default"] = (Extract);

/***/ }),

/***/ "./static/bootstrap.min.css":
/*!**********************************!*\
  !*** ./static/bootstrap.min.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/style.css":
/*!**************************!*\
  !*** ./static/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map