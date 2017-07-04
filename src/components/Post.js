/**
 * Created by react on 04.07.17.
 */

import React from 'react';

class Post extends React.Component {

    delete = () => {
        this.props.onDelete(this.props.post.id);
    };

    render() {
        return (
            <div>
                <h2>
                    Title: {this.props.post.title}
                </h2>
                <h4>
                    Author: {this.props.post.author}
                </h4>
                <p>
                    Content: {this.props.post.content}
                </p>
                <button onClick={this.delete}>Delete</button>
            </div>
        )
    }
}

export default Post;