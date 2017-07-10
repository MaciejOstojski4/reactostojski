import React from "react";

import Post from "../Post";

class PostList extends React.Component {
  render() {
    return (
      <div>
        <div className="row text-center">
          <h2>Your posts</h2>
        </div>
        <ul className="list-group">
          {this.props.posts.map(post => {
            return (
              <li key={post.id} className="list-group-item">
                <Post post={post} onDelete={this.props.onDelete} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default PostList;
