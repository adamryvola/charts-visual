export default class Buttons extends React.Component{

  render() {
    return (
      <div>
        <button className="btn btn-primary btn-lg" onClick={e => this.props.plus()}>+</button>
        <button className="btn btn-danger btn-lg" onClick={e => this.props.minus()}>-</button>
        <button className="btn btn-success btn-lg" onClick={e => this.props.reset()}>R</button>
      </div>
    );
  }

}
