import React, { Component } from 'react'

export class childcompo extends Component {
    static getDerivedStateFromProps(props,state){
        console.log("child console",props)
        return {
            count : props.count * 4
        }
    }
    render() {
        const { count }=this.props;
        return (
            <div>
                <h2>child data {count}</h2>
            </div>
        )
    }
}

export default childcompo
