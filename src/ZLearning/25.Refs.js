import React, { Component } from 'react'

export default class Refs extends Component {
    constructor(){
        super() 
        this.userRef=React.createRef();
    }
    takeFocus(){
        console.warn(this.userRef.current.value) 
        this.userRef.current.value="Raaj"
    }
    render() {
        return (
            <div>
                <h1>Refs</h1>
                <input ref={this.userRef} type="text" name="user" /><br /> <br />
                <button onClick={()=>(this.takeFocus())}>Click Me</button>
            </div>
        )
    }
}
