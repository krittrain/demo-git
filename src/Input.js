import React, { Component } from 'react'

class Input extends Component {
    render() {
        return (
            <div>
                <input 
                type = {this.props.type} 
                name = {this.props.name} 
                onChange = {this.props.change}
                onClick = {this.props.click}
                value = {this.props.value}
                />

            </div>
        )
    
}
}
export default Input
