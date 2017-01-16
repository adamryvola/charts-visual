import Greeting from './Greeting';
import Buttons from './Buttons';
import NameEditor from './NameEditor';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      counter: 0,
      name: 'Adam'
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  increase() {
    this.setState({
      counter: this.state.counter+1,
      name: this.state.name
    });
  }

  decrease() {
    this.setState({
      counter: this.state.counter-1,
      name: this.state.name
    })
  }

  changeName(newName) {
    this.setState({
      counter: this.state.counter,
      name: newName==='' ? 'Adam' : newName
    })
  }

  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <Greeting name={this.state.name} counter={this.state.counter} />
        <Buttons plus={this.increase} minus={this.decrease} />
        <NameEditor onChangeName={this.changeName} />
      </div>
    );
  }
};


ReactDOM.render(
  <App />,
  document.getElementById('content')
);
