import { Component } from "react";

class Count extends Component {
  constructor({ handleChildCallBack, stateVariable }) {
    super(handleChildCallBack, stateVariable);
    this.state = {
      count: ,
    };

    this.handleTodoCount = this.handleTodoCount.bind(this);
  }

  handleTodoCount() {
    this.setState((state) => ({
      ...state,
      count: state.count + 1,
    }));

    console.log(this.stateVariable);
  }

  handleChildCallBack() {
    this.handleTodoCount();
  }

  render() {
    return <h3>You have {this.state.count} items in your todo </h3>;
  }
}



export default Count