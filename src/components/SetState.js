import React, { Component } from "react";

class SetState extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      count1: 0
    };
  }
  CountChnage() {
    this.setState(
      {
        count: this.state.count + 1
      },
      () => {
        console.log("call back", this.state.count);
      }
    );
    console.log("before state", this.state.count);
  }
  CountChnageOnOldValue() {
    this.setState((prevState, props) => ({
      count1: prevState.count1 + 5
    }));
  }

  render() {
    return (
      <div>
        <h1>Count= {this.state.count}</h1>

        <button onClick={() => this.CountChnage()}>Count Change</button>
        <h1>Count1= {this.state.count1}</h1>
        <button onClick={() => this.CountChnageOnOldValue()}>
          Count 5 Change
        </button>
      </div>
    );
  }
}

export default SetState;
