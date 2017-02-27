export default class InputGroup extends React.Component{

  constructor() {
    super();
    this.hasButtonGroup = this.hasButtonGroup.bind(this);
  }

  hasButtonGroup(items) {
      for (let i=1;i<items.length;i++){
        if (items[i-1].type==="btn" && items[i-1].type===items[i].type) {
          return true;
        }
      }
      return false;
  }


  render() {
    const items = this.props.items;
    const hasGroup = this.hasButtonGroup(items);
    return (
      <div>
      <h1>Input Group</h1>
      {items.map(item => {
        switch(item.type) {
          case "btn":
            if (hasGroup) {
              return <buttonGroup></buttonGroup>
            } else {
              return <button>{item.text}</button>
            }
          case "input":
            return <input placeholder={item.placeholder} />
          case "addon":
            return <span>{item.text}</span>
        }
      })}
      </div>
    );
  }
}
