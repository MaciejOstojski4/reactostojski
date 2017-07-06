/**
 * Created by react on 04.07.17.
 */

import React from "react";

import Button from "../generic/button";
import styled from "styled-components";
import AlertButton from "../generic/AlertButton";


class Post extends React.Component {

    delete = () => {
        this.props.onDelete(this.props.post.id);
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
                    <Button label="Delete" class={"btn btn-danger"} onClick={this.delete} />
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

export default Post;
