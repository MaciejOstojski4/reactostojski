/**
 * Created by react on 06.07.17.
 */
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { loginAction } from "../../actions/actions";
import apiClient from "../../lib/api-client";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formObject: { email: "", password: "" },
      errorInfo: "",
    };
  }

  refreshState = e => {
    switch (e.target.id) {
      case "emailInput":
        this.setState({
          formObject: { ...this.state.formObject, email: e.target.value },
        });
        break;
      case "passwordInput":
        this.setState({
          formObject: { ...this.state.formObject, password: e.target.value },
        });
        break;
    }
  };

  createObjectToSend = () => {
    return {
      user: {
        email: this.state.formObject.email,
        password: this.state.formObject.password,
      },
    };
  };

  processLogin = e => {
    e.preventDefault();
    this.setState({
      errorInfo: "",
    });
    apiClient
      .post(LOGIN_URL, this.createObjectToSend())
      .then(response => {
        const token = response.data.data.auth_token;
        const userId = response.data.data.user_id
        this.props.dispatch(loginAction(this.state.formObject.email, token, userId));
        this.props.router.push("posts");
      })
      .catch(error => {
        this.setState({
          errorInfo: "Bad email or password. Try again",
        });
      });
  };

  render() {
    return (
      <div className="col-md-4 col-md-offset-4">
        <form>
          <div className="form-group">
            <label>Email</label>
            <input
              id="emailInput"
              onChange={this.refreshState}
              className="form-control"
              type="text"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              id="passwordInput"
              onChange={this.refreshState}
              className="form-control"
              type="password"
            />
          </div>
          <div className="form-gorup">
            <button onClick={this.processLogin} type="submit">
              Submit
            </button>
          </div>
          {this.state.errorInfo}
        </form>
      </div>
    );
  }
}

const LOGIN_URL = "/api/v1/sessions";

export default connect()(withRouter(LoginForm));
