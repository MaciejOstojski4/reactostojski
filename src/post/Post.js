/**
 * Created by react on 04.07.17.
 */

import React from "react";

import Button from "../user-interface/button";
import styled from "styled-components";
import AlertButton from "../user-interface/AlertButton";

class Post extends React.Component {

  onPostButtonClicked = () => {
    this.props.onPostButtonClicked(this.props.post.id);
  };

  onShowPostDetailsClicked = () => {
    this.props.onShowPostDetailsClicked(this.props.post.id);
  };

  render() {
    return (
      <StyledPost>
        <PostField className="row text-center">
          <h2>
            {this.props.post.title}
          </h2>
        </PostField>
        <PostField className="row text-center">
          Created: {this.props.post.created_at}
        </PostField>
        <PostField className="row text-center">
          {this.props.post.body}
        </PostField>
        <PostField className="row text-center">
          <Button
            label="Delete"
            class={"btn btn-danger"}
            onClick={this.onPostButtonClicked}
          />
        </PostField>
        <PostField className="row text-center">
          <Button
            label="Show details"
            class={"btn btn-success"}
            onClick={this.onShowPostDetailsClicked}
          />
        </PostField>
        <PostField className="row text-center">
          <AlertButton label="Hello" />
        </PostField>
      </StyledPost>
    );
  }
}

const PostField = styled.div`margin-bottom: 5px;`;

const StyledPost = styled.div`
  padding: 5px;

  &:hover {
    opacity: 0.7;
  }
`;

export default Post;
