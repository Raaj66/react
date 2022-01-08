import React, { Component, PureComponent } from "react";

export default class PureComponents extends PureComponent  {
  constructor() {
    super();
    this.state = {
      count: 10,
    };
  }

  render() {
    console.warn(this.state);
    return (
      <div>
        <h1>Pure Component</h1>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: 15 });
          }}
        >
          CLick
        </button>
      </div>
    );
  }
}
