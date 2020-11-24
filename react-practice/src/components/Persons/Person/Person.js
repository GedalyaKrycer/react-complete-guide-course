import React, { Component } from 'react';
import classes from './persons.module.css';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputEl.focus();
        this.inputElRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...');
        return (

            <>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Login</p>}
                <h3 onClick={this.props.click}>I am a {this.props.name} and I am {this.props.age} years old!</h3>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    // ref={(inputEl) => { this.inputEl = inputEl }}
                    ref={this.inputElRef}
                    onChange={this.props.changed}
                    value={this.props.name} />

            </>
        );
    }



}

export default withClass(Person, classes.person);

