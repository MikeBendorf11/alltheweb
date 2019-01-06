webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/bootstrap.min.css */ "./static/bootstrap.min.css");
/* harmony import */ var _static_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/style.css */ "./static/style.css");
/* harmony import */ var _static_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Popup */ "./pages/Popup.js");
/* harmony import */ var _Slides__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Slides */ "./pages/Slides.js");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Tooltip */ "./pages/Tooltip.js");
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

      window.onload = function () {
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
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "Portfolio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
        src: "static/3dmodel/three.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
        src: "static/3dmodel/OrbitControls.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
        src: "static/3dmodel/GLTFLoader.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
        src: "static/3dmodel/WebGL.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Slides__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onSlideClick: this.onSlideClick,
        interval: this.state.slideInterval,
        order: this.props.router.query.or,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Popup__WEBPACK_IMPORTED_MODULE_5__["default"], {
        activatePop: this.activatePop,
        isActive: this.state.isPopActive,
        content: this.state.clickedSlide,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: 'Drag or scroll this background',
        position: 'left',
        current: 'top',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: 'Drag or scroll this background',
        position: 'bottom',
        current: 'left',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: 'Drag or scroll this background',
        position: 'bottom',
        current: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var Extract = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["withRouter"])(Index);
/* harmony default export */ __webpack_exports__["default"] = (Extract);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.2210ae302c362f6110b8.hot-update.js.map