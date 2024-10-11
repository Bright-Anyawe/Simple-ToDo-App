import { Component } from "react";

class Count extends Component {
  constructor({ handleChildCallBack, stat }) {
    super(handleChildCallBack);
    this.state = {
      count: '0',
    };

    this.handleTodoCount = this.handleTodoCount.bind(this);
    this.sendDataToParent = this.sendDataToParent.bind(this);
  }

  handleTodoCount() {
    return this.setState((state) => ({
      ...state,
      count: this.props.stateVariable.length,
    })
console.log()
);
  }

  sendDataToParent() {
    this.handleChildCallBack(handleTodoCount);
  }

  render() {
    return <h3>You have {this.state.count} items in your todo </h3>;
  }
}



export default Count