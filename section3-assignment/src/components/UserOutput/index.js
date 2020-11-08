import React, { Component } from 'react'
import "./style.css";

export default class UserOutput extends Component {
    render() {
        return (
            <div className="card">
                <h1>{this.props.userName}</h1>
                <p>{this.props.bio}</p>
            </div>
        )
    }
}