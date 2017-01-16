export default class Greeting extends React.Component{
  render() {
    return (
      <h3>I am {this.props.name}, counter: {this.props.counter}</h3>
    );
  }
}
