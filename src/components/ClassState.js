import React, { Component } from "react";

class ClassState extends Component {
  constructor() {
    super();
    this.state = {
      message: "This is state 1"
    };
  }
  StateChnage() {
    this.setState({
      message: "State chnage to state2"
    });
  }
  render() {
    return (
      <div>
        <h1>Welcome Class Component {this.state.message}</h1>
        <button onClick={() => this.StateChnage()}>State Change</button>
      </div>
    );
  }
}

export default ClassState;
