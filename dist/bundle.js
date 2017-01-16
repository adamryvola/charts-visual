(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Greeting = require('./Greeting');

var _Greeting2 = _interopRequireDefault(_Greeting);

var _Buttons = require('./Buttons');

var _Buttons2 = _interopRequireDefault(_Buttons);

var _NameEditor = require('./NameEditor');

var _NameEditor2 = _interopRequireDefault(_NameEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //import vsech komponent, ktere pouzijeme vnitr komponenty App


//diky "export default" muzeme tuto komponentu v jindem souboru importovat
//tato trida rozsiruje tridu React.Component - to musi udelat kazda komponenta
var App = function (_React$Component) {
  _inherits(App, _React$Component);

  //klasicky kontruktor tridy
  function App() {
    _classCallCheck(this, App);

    //inicialni stav
    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      counter: 0,
      name: 'Adam'
    };
    //kazdou metodu tridy musime "nabindovat" - abychom ji mohli volat jako 'this.myMethod()'
    _this.increase = _this.increase.bind(_this);
    _this.decrease = _this.decrease.bind(_this);
    _this.changeName = _this.changeName.bind(_this);
    return _this;
  }

  //funkce, ktera zvysi hodnotu counter ve stavu komponenty App -> zbusobi prekresleni


  _createClass(App, [{
    key: 'increase',
    value: function increase() {
      this.setState({
        counter: this.state.counter + 1,
        name: this.state.name
      });
    }

    //funkce, ktera zvysi snizi counter ve stavu komponenty App -> zbusobi prekresleni

  }, {
    key: 'decrease',
    value: function decrease() {
      this.setState({
        counter: this.state.counter - 1,
        name: this.state.name
      });
    }

    //funkce, ktera zvysi zmeni atribut name ve stavu komponenty App -> zbusobi prekresleni

  }, {
    key: 'changeName',
    value: function changeName(newName) {
      this.setState({
        counter: this.state.counter,
        name: newName === '' ? 'Adam' : newName
      });
    }

    //funkce pro vykresleni komponenty - pouzita syntaxe JSX!!
    //--
    //pokud chceme uvnitr JSX pouzit opet JavaScript, musime jej obalit do {},
    //proto jsou predavane atributy napsane jako name={this.props.name}
    //--
    //vsimneme si, ze pokud chceme zmenit stav "rodice", musime potomkovi predat funkci jako parametr
    //jako tomu je u NameEditor -> onChangeName, z potomka se ke stavu rodice jinak nedostaneme

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Hello world'
        ),
        React.createElement(_Greeting2.default, { name: this.state.name, counter: this.state.counter }),
        React.createElement(_Buttons2.default, { plus: this.increase, minus: this.decrease }),
        React.createElement(_NameEditor2.default, { onChangeName: this.changeName })
      );
    }
  }]);

  return App;
}(React.Component);

exports.default = App;
;

},{"./Buttons":2,"./Greeting":3,"./NameEditor":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Buttons = function (_React$Component) {
  _inherits(Buttons, _React$Component);

  function Buttons() {
    _classCallCheck(this, Buttons);

    return _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).apply(this, arguments));
  }

  _createClass(Buttons, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: function onClick(e) {
              return _this2.props.plus();
            } },
          "+"
        ),
        React.createElement(
          "button",
          { onClick: function onClick(e) {
              return _this2.props.minus();
            } },
          "-"
        )
      );
    }
  }]);

  return Buttons;
}(React.Component);

exports.default = Buttons;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Greeting = function (_React$Component) {
  _inherits(Greeting, _React$Component);

  function Greeting() {
    _classCallCheck(this, Greeting);

    return _possibleConstructorReturn(this, (Greeting.__proto__ || Object.getPrototypeOf(Greeting)).apply(this, arguments));
  }

  _createClass(Greeting, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h3",
        null,
        "I am ",
        this.props.name,
        ", counter: ",
        this.props.counter
      );
    }
  }]);

  return Greeting;
}(React.Component);

exports.default = Greeting;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NameEditor = function (_React$Component) {
  _inherits(NameEditor, _React$Component);

  function NameEditor() {
    _classCallCheck(this, NameEditor);

    return _possibleConstructorReturn(this, (NameEditor.__proto__ || Object.getPrototypeOf(NameEditor)).apply(this, arguments));
  }

  _createClass(NameEditor, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        null,
        React.createElement("input", { onChange: function onChange(e) {
            _this2.props.onChangeName(e.target.value);
          }, type: "text", placeholder: "Your name..." })
      );
    }
  }]);

  return NameEditor;
}(React.Component);

exports.default = NameEditor;

},{}],5:[function(require,module,exports){
'use strict';

var _App = require('./App.js');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//pomoci ReactDOM vykreslime komponentu App do elementu s id "content" (v index.html)
ReactDOM.render(React.createElement(_App2.default, null), document.getElementById('content')); //import ROOT komponenty App

},{"./App.js":1}]},{},[5]);
