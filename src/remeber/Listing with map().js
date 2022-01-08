import React, { Component } from 'react'

export default class Listing extends Component {
    constructor(){
        super()
        this.state = {
            list : [
                { name : 'reeaj' , phone : '876786'},
                { name : 'reesdczxaj' , phone : '876asdx786'},
            ]
        }
    }
    render() {
        return (
            <div>
                {this.state.list.map((item)=>{
                    return (
                        <>
                    <h1>{item.name}</h1>
                    <h3>{item.phone}</h3>
                    </>
                    )
                })}
            </div>
        )
    }
}
