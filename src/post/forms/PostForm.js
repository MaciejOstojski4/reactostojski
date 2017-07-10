/**
 * Created by react on 04.07.17.
 */
import React from "react";

import Button from "../../user-interface/button";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import apiClient from "../../lib/api-client";

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: { id: Math.random(), title: "", content: "", author: "" },
    };
  }

  refreshState = e => {
    switch (e.target.id) {
      case "titleInput":
        this.setState({
          post: { ...this.state.post, title: e.target.value },
        });
        break;
      case "contentInput":
        this.setState({
          post: { ...this.state.post, content: e.target.value },
        });
        break;
      case "authorInput":
        this.setState({
          post: { ...this.state.post, author: e.target.value },
        });
        break;
    }
  };

  preparePayload = () => {
    return {
      post: {
        title: this.state.post.title,
        body: this.state.post.content,
        user_id: this.props.user.userId,
      },
    };
  };

  onSubmit = e => {
    e.preventDefault();
    apiClient
      .post(ADD_POST_URL, this.preparePayload())
      .then(response => {
        this.props.router.push("posts");
      })
      .catch(error => {
        console.log("Error occured while app try to add new post: " + error);
      });
  };

  render() {
    return (
      <div>
        <div className="text-center">
          <h2>Add new Post</h2>
        </div>
        <form>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              id="titleInput"
              placeholder="Title"
              type="text"
              value={this.state.post.title}
              onChange={this.refreshState}
            />
          </div>
          <div className="form-group">
            <label>Content</label>
            <textArea
              rows="20"
              className="form-control"
              id="contentInput"
              placeholder="Content"
              type="text"
              value={this.state.post.content}
              onChange={this.refreshState}
            />
          </div>
          <div className="form-group">
            <label>Author</label>
            <input
              className="form-control"
              id="authorInput"
              placeholder="Author"
              type="text"
              value={this.state.post.author}
              onChange={this.refreshState}
            />
          </div>
          <div className="form-group text-center">
            <Button
              className="btn btn-success"
              onClick={this.onSubmit}
              label="Submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

const ADD_POST_URL =
  "/example/api/v1/posts";

const mapStateToProps = currentState => {
  return {
    user: currentState.sessionReducer.user,
  };
};

export default connect(mapStateToProps)(withRouter(PostForm));
