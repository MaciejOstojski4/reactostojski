/**
 * Created by react on 04.07.17.
 */

import React from "react";

import Button from "./generic/button";

class Post extends React.Component {

    delete = () => {
        this.props.onDelete(this.props.post.id);
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h2>Title: {this.props.post.title}</h2>
                </div>
                <div className="row">
                    Author: {this.props.post.author}
                </div>
                <div className="row" style = {{
                    "width": "65%"
                }}>
                    Content: {this.props.post.content}
                </div>
                <div className="row">
                    <Button label="Delete" class={"btn btn-danger"} onClick={this.delete} />
                </div>
            </div>
        )
    }
}

export default Post;