import React, { Component } from 'react'

export class Form extends Component {
    constructor (){
        super()
        this.state = {
            email : '',
            pass : '',
            emailError : '',
            passError : '',
        }
    }

    // Validation
    valid () {
        if(!this.state.email.includes('@') && this.state.pass.length < 4){
            this.setState({
                emailError : 'errrorrr' , passError : 'errrr'
            })
        }
        else if(!this.state.email.includes('@')){
            this.setState({
                emailError : 'errrorrr'
            })
        }
        else if(this.state.pass.length < 4){
            this.setState({
              passError : 'errrr'
            })
        }
        else {
            return true
        }
        }
    submit=()=>{
        this.setState({
            email : '' , pass : ''
        })
        if(this.valid()){
            alert("submitetted")
        }
    }
    render() {
        return (
            <div>
                <h1>Form</h1>
                <label>Email</label><br/>
                <input type="email" name="user"
                onChange={(e)=>{this.setState({email : e.target.value})}}
                />
                <p style={{color : 'red'}}>{this.state.emailError}</p>
                <label>Password</label><br/>
                <input type="password" name="pass"
                onChange={(e)=>{this.setState({pass : e.target.value})}}
                />
                <p style={{color : 'red'}}>{this.state.passError}</p>
                <button onClick={this.submit}>submit</button>
            </div>
        )
    }
}

export default Form
