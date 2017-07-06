/**
 * Created by react on 05.07.17.
 */
import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {

    increment = () => {
        this.props.dispatch({type: "INCREMENT"})
    };

    decrement = () => {
        this.props.dispatch({type: "DECREMENT"})
    };

    render() {
        return (
            <div>
                <h2>Home Page</h2>
                {this.props.counter}
                <button onClick={this.increment} >Increment</button>
                <button onClick={this.decrement} >Decrement</button>
            </div>
        )
    }
}

// Wstrzyknięcie stanu ze store do komponentu
const mapStateToProps = currentState => {
    return {
        counter: currentState.counter
    };
};

export default connect(mapStateToProps)(Home);
