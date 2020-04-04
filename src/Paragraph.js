import React, { Component } from 'react'

export class Paragraph extends Component {
    render() {
        return (
            <div>
               <p>{this.props.value}</p> 
            </div>
        )
    }
}

export default Paragraph
