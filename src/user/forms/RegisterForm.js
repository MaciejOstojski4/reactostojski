/**
 * Created by react on 07.07.17.
 */
import React from "react";
import axios from "axios";
import { withRouter } from "react-router";

class RegisterForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      formObject: {
        email: "",
        password: "",
        repeatedPassword: ""
      },
      errorInfo: ""
    }
  }

  refreshState = e => {
      switch(e.target.id) {
        case "emailInput":
          this.setState({
            formObject: {...this.state.formObject, email: e.target.value}
          });
          break;
        case "passwordInput":
          this.setState({
            formObject: {...this.state.formObject, password: e.target.value}
          });
          break;
        case "repeatedPasswordInput":
          this.setState({
            formObject: {...this.state.formObject, repeatedPassword: e.target.value}
          });
          break;
      }
  };

  clearState = () => {
    this.setState({
      formObject: {
        email: "",
        password: "",
        repeatedPassword: ""
      }
    })
  };

  createObjectToSend = () => {
    return {
      user: {
        email: this.state.formObject.email,
        password: this.state.formObject.password
      }
    }
  };

  onSubmit = e => {
    e.preventDefault();
    if(this.state.formObject.password === this.state.formObject.repeatedPassword) {
      axios.post(REGISTER_URL, this.createObjectToSend())
        .then(response => {
          this.props.router.push("login-form");
          this.clearState();
      }).catch(error => {
          this.setState({
            errorInfo: "Server error"
          });
          console.log(error);
      })
    } else {
      this.setState({
        errorInfo: "Passwords are different"
      })
    }
  };

  render() {
    return (
      <div className="col-md-4 col-md-offset-4 text-center">
        <form>
          <div className="form-group">
            <label>Email</label>
            <input id="emailInput" className="form-control" type="text" onChange={this.refreshState} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input id="passwordInput" className="form-control" type="password" onChange={this.refreshState} />
          </div>
          <div className="form-group">
            <label>Repeat password</label>
            <input id="repeatedPasswordInput" className="form-control" type="password" onChange={this.refreshState} />
          </div>
          <div className="form-group">
            <button onClick={this.onSubmit}>Submit</button>
          </div>
        </form>
        {this.state.errorInfo}
      </div>
    )
  }
}

const REGISTER_URL = "https://praktyki-react.herokuapp.com/api/v1/registrations";

export default withRouter(RegisterForm);
