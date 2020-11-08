import React, { Component } from 'react'
import "./style.css";

export default class UserInput extends Component {
    render() {
        return (
            <input type="text" onChange={this.props.handleChange} placeholder="Name…"/>
        )
    }
}
 