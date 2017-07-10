/**
 * Created by react on 05.07.17.
 */
import React from "react";
import { connect } from "react-redux";
import apiClient from "../lib/api-client";

class PostDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {}
    }
  }

  componentDidMount() {
    apiClient.get(POST_URL + this.props.params.id)
      .then(response => {
        this.setState({
          post: response.data
        })
      })
      .catch(error => {
        console.log("Error occurred while app try to show post details: " + error);
      })
  }

  render() {
    return (
      <div className="col-md-8 col-md-offset-2 text-center">
        <div className="row jumbotron">
          <h1>
            {this.state.post.title}
          </h1>
        </div>
        <div className="row">
          <h4>
            Created: {this.state.post.created_at}
          </h4>
        </div>
        <div className="row">
          {this.state.post.body}
        </div>
      </div>
    );
  }
}

const POST_URL = "/example/api/v1/posts/";

export default connect()(PostDetail);
