import React, { Component } from "react";
import "./App.css";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Home from "./Home";
import PostPage from "./post/PostPage";
import PostForm from "./post/forms/PostForm";
import PostDetail from "./post/PostDetail";
import Layout from "./Layout";
import LoginForm from "./user/forms/LoginForm";
import RegisterForm from "./user/forms/RegisterForm";

class App extends Component {
  authenticateUser = (nextState, replace) => {
    const state = this.props.store.getState();
    console.log(state.sessionReducer.user.token);
    if (state.sessionReducer.user.token === undefined) {
      replace({
        pathname: "login-form",
      });
    }
  };

  render() {
    return (
      <div className="container">
        <Router history={hashHistory}>
          <Route path="/" component={Layout} onEnter={this.authenticateUser}>
            <IndexRoute component={Home} />
            <Route path="posts" component={PostPage} />
            <Route path="post-form" component={PostForm} />
            <Route path="post-details/:id" component={PostDetail} />
          </Route>
          <Route path="login-form" component={LoginForm} />
          <Route path="register-form" component={RegisterForm} />
        </Router>
      </div>
    );
  }
}

export default App;
