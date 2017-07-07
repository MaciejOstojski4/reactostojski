/**
 * Created by react on 04.07.17.
 */
import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick} className={this.props.class}>
        {this.props.label}
      </button>
    );
  }
}

Button.defaultProps = {
  className: "btn btn-default",
};

export default Button;
