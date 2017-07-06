import React from 'react';

import Post from './Post';

class PostList extends React.Component {

    render() {
        return(
            <div>
                <div className="row text-center">
                    <h2>Your posts</h2>
                </div>
                <ul className="list-group">
                    {this.props.posts.map((post) => {
                        return(
                            <li className="list-group-item">
                                <Post key={post.id} post={post} onDelete={this.props.onDelete}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default PostList;