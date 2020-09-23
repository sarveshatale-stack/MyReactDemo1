import React, { Component } from "react";

class ClassProp extends Component {
  render() {
    return <h1>Welcome Class Component {this.props.classtype}</h1>;
  }
}

export default ClassProp;
