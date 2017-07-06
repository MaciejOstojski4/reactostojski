/**
 * Created by react on 06.07.17.
 */
import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {email: "", password: ""}
        }
    }

    refreshState = e => {
      switch(e.target.id) {
          case "emailInput":
              this.setState({
                  user: {...this.state.user, email: e.target.value}
              });
              break;
          case "passwordInput":
              this.setState({
                  user: {...this.state.user, password: e.target.value}
              });
              break;
      }
    };

    login = e =>{
        e.preventDefault();
        this.props.dispatch({ type: "LOGIN", data: this.state.user.email });
        this.props.router.push("posts");
    };

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input id="emailInput" onChange={this.refreshState} className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input id="passwordInput" onChange={this.refreshState} className="form-control" type="password" />
                    </div>
                    <div className="form-gorup">
                        <button onClick={this.login} type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect()(withRouter(LoginForm));
