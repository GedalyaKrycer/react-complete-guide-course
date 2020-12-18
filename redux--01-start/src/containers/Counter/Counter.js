import React, { Component } from 'react';
import { connect } from "react-redux";
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';


class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    // counterChangedHandler = (action, value) => {
    //     switch (action) {
    //         case 'inc':
    //             this.setState((prevState) => { return { counter: prevState.counter + 1 } })
    //             break;
    //         case 'dec':
    //             this.setState((prevState) => { return { counter: prevState.counter - 1 } })
    //             break;
    //         case 'add':
    //             this.setState((prevState) => { return { counter: prevState.counter + value } })
    //             break;
    //         case 'sub':
    //             this.setState((prevState) => { return { counter: prevState.counter - value } })
    //             break;
    //     }
    // }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(result => {
                        return <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>

                    })}
                </ul>
            </div>
        );
    }
}

// Stores instructions about how the state managed by redux should be mapped by props used by the component. 
// State specified as an argument here, will be reaching out the the actual state in the redux store 
const mapStateToProps = state => {
    return {

        // We are creating a new "prop" called "ctr" that will hold specific state from our store and can be used in the above component
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}

//  The dispatch argument will return it's corresponding redux function
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 5 }),
        onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, value: 5 }),
        onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);