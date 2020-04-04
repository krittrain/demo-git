import React, { Component } from 'react'

export class Button extends Component {
    render() {
        return (
            <div>
              <button onClick ={this.props.click}>{this.props.value}</button>  
            </div>
        )
    }
}

export default Button
