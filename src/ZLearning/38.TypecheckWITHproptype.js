import React, { Component } from 'react'
import PropTypes from "prop-types";

 class TypecheckWITHproptype extends Component {
    render() {
        return (
            <div>
                <h1>TypecheckWITHproptype</h1>
                <h1>{this.props.age}</h1>
            </div>
        )
    }
}
TypecheckWITHproptype.propTypes={
    age : PropTypes.number
}
export default TypecheckWITHproptype;