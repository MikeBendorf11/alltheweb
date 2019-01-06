webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/Slides.js":
/*!*************************!*\
  !*** ./pages/Slides.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items */ "./pages/items.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tooltip */ "./pages/Tooltip.js");
var _jsxFileName = "C:\\Users\\mb8user\\Desktop\\Portolio-Compiled2\\pages\\Slides.js";

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
            lineNumber: 92
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          onClick: _this2.handleClick.bind(_this2, item.name),
          id: 'cap-' + item.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselCaption"], {
          captionText: item.caption,
          captionHeader: item.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
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
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], {
        position: 'right',
        current: 'controlR',
        text: 'Next Slide',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], {
        position: 'left',
        current: 'controlL',
        text: 'Previous Slide',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), slides, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselControl"], {
        id: "control",
        direction: "prev",
        directionText: "Previous",
        onClickHandler: this.previous,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselControl"], {
        id: "control",
        direction: "next",
        directionText: "Next",
        onClickHandler: this.next,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }));
    }
  }]);

  return Slides;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Slides);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Slides")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.d4c3676adc0209a9914e.hot-update.js.map