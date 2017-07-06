/**
 * Created by react on 06.07.17.
 */
import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import axios from "axios";

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {email: "", password: ""},
            errorInfo: ""
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

    login = e => {
        e.preventDefault();
        this.setState({
            errorInfo: ""
        });
        axios.post("http://192.168.10.127:3001/sign-in", {
            email: this.state.user.email,
            password: this.state.user.password
        }).then(response => {
            this.props.dispatch({ type: "LOGIN", data: this.state.user.email });
            this.props.router.push("posts");
        }).catch(error => {
            this.setState({
                errorInfo: "Bad email or password. Try again"
            })
        });
    };

    render() {
        return (
            <div className="col-md-4 col-md-offset-4">
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
                    {this.state.errorInfo}
                </form>
            </div>
        )
    }
}

export default connect()(withRouter(LoginForm));
