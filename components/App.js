//import vsech komponent, ktere pouzijeme uvnitr komponenty App
import Greeting from './Greeting';
import Buttons from './Buttons';
import NameEditor from './NameEditor';
import InputGroup from './InputGroup';

//diky "export default" muzeme tuto komponentu v jinem souboru importovat
//tato trida rozsiruje tridu React.Component - to musi udelat kazda React komponenta
export default class App extends React.Component {

  //klasicky kontruktor tridy
  constructor() {
    super();
    //inicialni stav
    this.state = {
      counter: 0,
      name: 'Adam'
    };
    //kazdou metodu tridy musime "nabindovat" - abychom ji mohli volat jako 'this.myMethod()'
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  componentDidUpdate() {
    window.onChangeState(this.state);
  }

  //funkce, ktera zvysi hodnotu counter ve stavu komponenty App -> zbusobi prekresleni
  increase() {
    this.setState({
      counter: this.state.counter+1,
      name: this.state.name
    });
  }

  //funkce, ktera snizi counter ve stavu komponenty App -> zbusobi prekresleni
  decrease() {
    this.setState({
      counter: this.state.counter-1,
      name: this.state.name
    })
  }

  //funkce, ktera resetuje counter na 0 ve stavu komponenty App -> zbusobi prekresleni
  reset() {
    this.setState({
      counter: 0,
      name: this.state.name
    })
  }

  //funkce, ktera zmenni atribut name ve stavu komponenty App -> zbusobi prekresleni
  changeName(newName) {
    this.setState({
      counter: this.state.counter,
      name: newName==='' ? 'Adam' : newName
    })
  }

  //funkce pro vykresleni komponenty - pouzita syntaxe JSX!! -> to, co vypada jako HTML uvnitr javascriptu
  //--
  //pokud chceme uvnitr JSX pouzit opet JavaScript, musime jej obalit do {},
  //proto jsou predavane atributy napsane jako name={this.props.name}
  //--
  //vsimneme si, ze pokud chceme zmenit stav "rodice", musime potomkovi predat funkci jako parametr
  //jako tomu je u NameEditor -> onChangeName, z potomka se ke stavu rodice jinak nedostaneme
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <Greeting name={this.state.name} counter={this.state.counter} />
        <Buttons plus={this.increase} minus={this.decrease} reset={this.reset} />
        <NameEditor onChangeName={this.changeName} />
        <InputGroup items={[{type: "btn", text: "Prvni butt"}, {type: "addon", text: "Add-on desc"}, {type: "input", placeholder: "default value"}]} />
      </div>
    );
  }
};
