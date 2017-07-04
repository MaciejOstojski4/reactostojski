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
            <div style = {{
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                <h2>
                    Title: {this.props.post.title}
                </h2>
                <p>
                    Author: {this.props.post.author}
                </p>
                <p>
                    Content: {this.props.post.content}
                </p>
                <Button label="Delete" onClick={this.delete} />
            </div>
        )
    }
}

export default Post;