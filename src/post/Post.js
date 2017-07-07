/**
 * Created by react on 04.07.17.
 */

import React from "react";

import Button from "../user-interface/button";
import styled from "styled-components";
import AlertButton from "../user-interface/AlertButton";
import { connect } from "react-redux";
import {deletePostAction, changePostToDisplayAction} from "../actions/actions";
import { withRouter } from "react-router";

class Post extends React.Component {

    showPostDetails = () => {
        this.props.dispatch(changePostToDisplayAction(this.props.post.id));
        this.props.router.push("post-details");
    };

    render() {
        return (
            <StyledPost>
                <PostField className="row text-center" >
                    <h2>{this.props.post.title}</h2>
                </PostField>
                <PostField className="row text-center" >
                    Author: {this.props.post.author}
                </PostField>
                <PostField className="row text-center" >
                    {this.props.post.content}
                </PostField>
                <PostField className="row text-center">
                    <Button label="Delete" class={"btn btn-danger"}
                            onClick={() => this.props.dispatch(deletePostAction(this.props.post.id))} />
                </PostField>
                <PostField className="row text-center">
                    <Button label="Show details" class={"btn btn-success"}
                            onClick={this.showPostDetails} />
                </PostField>
                <PostField className="row text-center">
                    <AlertButton label="Hello"/>
                </PostField>
            </StyledPost>
        )
    }
}

const PostField = styled.div`
    margin-bottom: 5px;
`;

const StyledPost = styled.div`
   padding: 5px;
   
    &:hover {
        opacity: 0.7;
    }
`;

export default connect()(withRouter(Post));
