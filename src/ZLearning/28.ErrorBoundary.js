import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    render() {
        if(true){
            throw new Error('Custom Error')
        }
        return (
            <div>
               <h1>Error Boundary</h1> 
            </div>
        )
    }
} 
