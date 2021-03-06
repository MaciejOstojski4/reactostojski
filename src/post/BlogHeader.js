/**
 * Created by react on 05.07.17.
 */
import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { logoutAction } from "../actions/actions";

class BlogHeader extends React.Component {
  isUserLogged = userEmail => {
    if (userEmail !== "") {
      return "Email: " + userEmail;
    } else {
      return "Please login";
    }
  };

  render() {
    return (
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              Blog
            </Link>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Link to="/posts">Post list</Link>
            </li>
            <li>
              <Link to="/post-form">Post form</Link>
            </li>
            <li>
              <Link to="/post-details">Post details</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="navbar-text">
              {this.isUserLogged(this.props.userEmail)}
            </li>
            <li className="navbar-text">
              Post counter{" "}
              <span className="badge">{this.props.postQuantity}</span>
            </li>
            <li>
              <Link to="/login-form">
                Login <span className="glyphicon glyphicon-log-in" />
              </Link>
            </li>
            <li>
              <Link
                onClick={() => this.props.dispatch(logoutAction())}
                to="login-form"
              >
                Logout <span className="glyphicon glyphicon-log-out" />
              </Link>
            </li>
            <li>
              <Link to="/register-form">
                Register <span className="glyphicon glyphicon-user" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = currentState => {
  return {
    postQuantity: currentState.postsReducer.posts.length,
    userEmail: currentState.sessionReducer.user.userEmail,
  };
};

export default connect(mapStateToProps)(BlogHeader);
