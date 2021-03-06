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

var _InputGroup = require('./InputGroup');

var _InputGroup2 = _interopRequireDefault(_InputGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //import vsech komponent, ktere pouzijeme uvnitr komponenty App


//diky "export default" muzeme tuto komponentu v jinem souboru importovat
//tato trida rozsiruje tridu React.Component - to musi udelat kazda React komponenta
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
    _this.reset = _this.reset.bind(_this);
    _this.changeName = _this.changeName.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      window.onChangeState(this.state);
    }

    //funkce, ktera zvysi hodnotu counter ve stavu komponenty App -> zbusobi prekresleni

  }, {
    key: 'increase',
    value: function increase() {
      this.setState({
        counter: this.state.counter + 1,
        name: this.state.name
      });
    }

    //funkce, ktera snizi counter ve stavu komponenty App -> zbusobi prekresleni

  }, {
    key: 'decrease',
    value: function decrease() {
      this.setState({
        counter: this.state.counter - 1,
        name: this.state.name
      });
    }

    //funkce, ktera resetuje counter na 0 ve stavu komponenty App -> zbusobi prekresleni

  }, {
    key: 'reset',
    value: function reset() {
      this.setState({
        counter: 0,
        name: this.state.name
      });
    }

    //funkce, ktera zmenni atribut name ve stavu komponenty App -> zbusobi prekresleni

  }, {
    key: 'changeName',
    value: function changeName(newName) {
      this.setState({
        counter: this.state.counter,
        name: newName === '' ? 'Adam' : newName
      });
    }

    //funkce pro vykresleni komponenty - pouzita syntaxe JSX!! -> to, co vypada jako HTML uvnitr javascriptu
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
        React.createElement(_Buttons2.default, { plus: this.increase, minus: this.decrease, reset: this.reset }),
        React.createElement(_NameEditor2.default, { onChangeName: this.changeName }),
        React.createElement(_InputGroup2.default, { items: [{ type: "btn", text: "Prvni butt" }, { type: "addon", text: "Add-on desc" }, { type: "input", placeholder: "default value" }] })
      );
    }
  }]);

  return App;
}(React.Component);

exports.default = App;
;

},{"./Buttons":2,"./Greeting":3,"./InputGroup":4,"./NameEditor":5}],2:[function(require,module,exports){
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
          { className: "btn btn-primary btn-lg", onClick: function onClick(e) {
              return _this2.props.plus();
            } },
          "+"
        ),
        React.createElement(
          "button",
          { className: "btn btn-danger btn-lg", onClick: function onClick(e) {
              return _this2.props.minus();
            } },
          "-"
        ),
        React.createElement(
          "button",
          { className: "btn btn-success btn-lg", onClick: function onClick(e) {
              return _this2.props.reset();
            } },
          "R"
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

var InputGroup = function (_React$Component) {
  _inherits(InputGroup, _React$Component);

  function InputGroup() {
    _classCallCheck(this, InputGroup);

    var _this = _possibleConstructorReturn(this, (InputGroup.__proto__ || Object.getPrototypeOf(InputGroup)).call(this));

    _this.hasButtonGroup = _this.hasButtonGroup.bind(_this);
    return _this;
  }

  _createClass(InputGroup, [{
    key: "hasButtonGroup",
    value: function hasButtonGroup(items) {
      for (var i = 1; i < items.length; i++) {
        if (items[i - 1].type === "btn" && items[i - 1].type === items[i].type) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var items = this.props.items;
      var hasGroup = this.hasButtonGroup(items);
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Input Group"
        ),
        items.map(function (item) {
          switch (item.type) {
            case "btn":
              if (hasGroup) {
                return React.createElement("buttonGroup", null);
              } else {
                return React.createElement(
                  "button",
                  null,
                  item.text
                );
              }
            case "input":
              return React.createElement("input", { placeholder: item.placeholder });
            case "addon":
              return React.createElement(
                "span",
                null,
                item.text
              );
          }
        })
      );
    }
  }]);

  return InputGroup;
}(React.Component);

exports.default = InputGroup;

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
'use strict';

var _App = require('./App.js');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onChangeState = function (state) {
  console.log(state);

  document.getElementById('graph').innerHTML = "state";

  //TODO -> re-render d3 chart
};

//pomoci ReactDOM vykreslime komponentu App do elementu s id "content" (v index.html)
//import ROOT komponenty App
ReactDOM.render(React.createElement(_App2.default, null), document.getElementById('content'));

},{"./App.js":1}]},{},[6]);
