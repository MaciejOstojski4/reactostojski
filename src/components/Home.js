/**
 * Created by react on 05.07.17.
 */
import React from "react";
import { connect } from "react-redux";
import {INCREMENT_ACTION, DECREMENT_ACTION} from "../actions/actions";

class Home extends React.Component {

    increment = () => {
        return {
            type: INCREMENT_ACTION
        }
    };

    decrement = () => {
        return {
            type: DECREMENT_ACTION
        }
    };

    render() {
        return (
            <div>
                <h2>Home Page</h2>
                {this.props.counter}
                <button onClick={() => this.props.dispatch(this.increment())} >Increment</button>
                <button onClick={() => this.props.dispatch(this.decrement())} >Decrement</button>
            </div>
        )
    }
}

// Wstrzyknięcie stanu ze store do komponentu
const mapStateToProps = currentState => {
    return {
        counter: currentState.counterReducer
    };
};

export default connect(mapStateToProps)(Home);
