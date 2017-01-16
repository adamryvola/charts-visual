export default class Buttons extends React.Component{

  render() {
    return (
      <div>
        <button onClick={e => this.props.plus()}>+</button>
        <button onClick={e => this.props.minus()}>-</button>
      </div>
    );
  }

}
