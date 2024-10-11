import { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: "",
    };

    
    this.handleTodoCount = this.handleTodoCount.bind(this);
}


handleTodoCount() {
     return this.setState((state) => ({
          ...state,
          count: this.props.stateVariable.length,
     }));
     this.props.parentCallBack(handleTodoCount)
}

  render() {
    return <h3>You have {this.state.count} items in your todo </h3>;
  }
}



export default Count