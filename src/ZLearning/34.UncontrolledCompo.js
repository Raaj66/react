import React, { Component } from "react";

export default class UncontrolledCompo extends Component {
    constructor(){
        super()
        this.name=React.createRef();
        this.pass=React.createRef();
    }
    handleSubmit(e){
        e.preventDefault();
        console.warn(this.name.current.value,this.pass.current.value)
    }
  render() {
    return (
      <div>
        <h1>Uncontrolled Compo</h1>
        <form
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <input type="text" placeholder="email" ref={this.name}/>
          <br />
          <br />
          <input type="password" placeholder="pass" ref={this.pass} />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
