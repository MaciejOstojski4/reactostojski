/**
 * Created by react on 05.07.17.
 */
import React from "react";
import { connect } from "react-redux";

class PostDetail extends React.Component {
  isPostChoosen = () => {
    if (this.props.post === undefined) {
      return "Nie wybrałeś posta";
    } else {
      return (
        <div>
          <div className="row jumbotron">
            <h1>
              {this.props.post.title}
            </h1>
          </div>
          <div className="row">
            <h4>
              Autor: {this.props.post.author}
            </h4>
          </div>
          <div className="row">
            {this.props.post.content}
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="col-md-8 col-md-offset-2 text-center">
        {this.isPostChoosen()}
      </div>
    );
  }
}

const mapStateToProps = currentState => {
  return {
    post: currentState.postsReducer.posts.find(
      val => val.id === currentState.postsReducer.postToDisplayId,
    ),
  };
};

export default connect(mapStateToProps)(PostDetail);
