/**
 * Created by react on 05.07.17.
 */
import React from "react";
import { connect } from "react-redux";
import {incrementAction, decrementAction} from "./actions/actions";

class Home extends React.Component {

    render() {
        return (
            <div>
                <h2>Home Page</h2>
                {this.props.counter}
                <button onClick={() => this.props.dispatch(incrementAction())} >Increment</button>
                <button onClick={() => this.props.dispatch(decrementAction())} >Decrement</button>
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
