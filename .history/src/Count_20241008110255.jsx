import { Component } from "react";

class Count extends  Component {
constructor(props) {
     super(props)
     this.state = {
          count: ''
     }
}

handleTodoCount() { 
     this.setState((prevState) => {...prevState, count: })
}

     
     render() {
     
          return (
               <h3>You have {this.state.count} items in your todo </h3>
          )
     }
}


}
export default Count