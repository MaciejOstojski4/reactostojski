/**
 * Created by react on 04.07.17.
 */
import React from "react";

class Button extends React.Component {

    render() {
        return (
            <button onClick={this.props.onClick} className="btn btn-default">{this.props.label}</button>
        )
    }
}

export default Button;
