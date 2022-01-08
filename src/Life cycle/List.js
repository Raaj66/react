import React, { Component } from 'react'

export class List extends Component {
    constructor(){
        super();
        console.warn("COnstructor")
        this.state ={
            count : 0
        }
    }
    componentWillMount(){
        console.warn("componentWillMount")
    }
    componentDidMount(){
        console.warn("componentDidMount")
    }
    componentDidUpdate(){
        console.warn("componentDidUpdate")
    }
    componentWillUnmount(){
        console.warn("componentWillUnmount")
    }
    render() {
        const {count}=this.state;
        console.warn("render")
        return (
            <div>
                  <h1>count is {count}</h1>
                <button onClick={()=>{this.setState({count :count+1})}}>click</button>
            </div>
        )
    }
}

export default List
