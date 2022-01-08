import React, { Component } from 'react'

export class Classcompo extends Component {
    constructor(){
        super();
        this.state ={
            show : true
        }
    }
    render() {
        const { show} = this.state;
        return (
            <div>
                {
                    show ? 
                    <h1>this is true</h1> :
                    null
                }
            <button onClick={()=>{this.setState({show : !show})}}>Toggle</button>
            </div>
        )
    }
}

export default Classcompo
