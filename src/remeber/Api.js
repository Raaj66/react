import React, { Component } from 'react'

export default class Api extends Component {
    constructor() {
        super()
        this.state = {
            users : null
        }
    }
    componentDidMount() {
        fetch('https://api.diatoz.com/about-us')
        .then((resp)=>{
            console.log(resp)
            resp.json()
        .then((result)=>{
            console.warn(result.data)
            this.setState({users : result.data})
        })
        })
    }
    render() {
        console.log("awards",this.state.users)
        return (
            <div>
                <h1>hello</h1>
                {this.state.users ?
                  this.state.users.map((item)=>{
                      return(
                          <div>
                        {/* <div key={item.id}> */}
                            {/* <p>{item.id} -- {item.first_name} {item.last_name} - {item.email}</p> */}
                            <p>{item.description}</p>
                        </div>
                      )
                  }) 
                  : null      
            }
            </div>
        )
    }
}
