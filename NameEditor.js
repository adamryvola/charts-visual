export default class NameEditor extends React.Component{

  render() {
    return (
      <div>
        <input onChange={e => {this.props.onChangeName(e.target.value)}} type="text" placeholder="Your name..." />
      </div>
    );
  }

}
