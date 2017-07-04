import React from 'react';

import Post from './Post';

class PostList extends React.Component {

    render() {
        return(
            <ul>
                {this.props.posts.map((post) => {
                    return(
                        <li>
                            <Post key={post.title} title={post.title} content={post.content} />
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default PostList;