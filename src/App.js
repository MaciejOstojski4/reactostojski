import React, {Component} from "react";
import "./App.css";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import Home from "./Home";
import PostPage from "./post/PostPage";
import PostForm from "./post/forms/PostForm";
import PostDetail from "./post/PostDetail";
import Layout from "./Layout";
import LoginForm from "./user/forms/LoginForm";

class App extends Component {

  render() {
    return (
      <div className="container">
        <Router history={hashHistory} >
          <Route path="/" component={Layout}>
            <IndexRoute component={Home} />
            <Route path="posts" component={PostPage} />
            <Route path="post-form" component={PostForm} />
            <Route path="post-details" component={PostDetail} />
            <Route path="login-form" component={LoginForm} />
          </Route>
        </Router>
      </div>
    )
  }
}

export default App;
