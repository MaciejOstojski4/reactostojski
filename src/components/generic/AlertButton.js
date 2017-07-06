/**
 * Created by react on 05.07.17.
 */
import React from "react";
import Button from "./button";

class AlertButton extends React.Component {

    alert = () => {
        alert("Hello!");
    };

    render() {
        return (
            <Button {...this.props} onClick={this.alert}  />
        )
    }
}

AlertButton.defaultProps = {
    className: "btn btn-default"
};

export default AlertButton
