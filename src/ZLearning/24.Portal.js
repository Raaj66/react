import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Portal extends Component {
    constructor() {
        super()
        this.state = {
            users : null
        }
    }
    componentDidMount() {
        fetch('https://reqres.in/api/users')
        .then((resp)=>{
            resp.json()
        .then((result)=>{
            console.warn(result.data)
            this.setState({users : result.data})
        })
        })
    }
  render() {
    return ReactDOM.createPortal(
        <div>
        <h1>hello</h1>
        {this.state.users ?
          this.state.users.map((item)=>{
              return(
                  <div key={item.id}>
                    <p>{item.id} -- {item.first_name} {item.last_name} - {item.email}</p>
                </div>
              )
          }) 
          : null      
    }
    </div>
    ,
    document.getElementById('other_root'))
  }
}
