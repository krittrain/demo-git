import React, { Component } from 'react'


export class ButtonValue extends Component {
    render() {
        return (

            <div>
              <p>{this.props.value}</p>  
            </div>
        )
    }
}

export default ButtonValue
