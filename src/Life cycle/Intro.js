/* eslint-disable */
import React, { Component } from 'react'
import ChildCompo from './ChildCompo'

export class intro extends Component {
    constructor(){
        console.warn("constructor")
        super()
        this.state={
            count : 0
        }
    }
    shouldComponentUpdate(prevprops,prevState){
        console.warn("should",prevState)
        if(prevState.count == 2){
            alert("hi")
            return false
        }
        return true
    }
    render() {
        console.warn("render")
        const {count}=this.state;
        return (
            <div>
                {/* <ChildCompo sendcount={count} /> */}
                <h1>count is {count}</h1>
                <button onClick={()=>{this.setState({count :count+1})}}>click</button>
            </div>
        )
    }
}

export default intro
