import React from 'react';

import Post from './Post';

class PostList extends React.Component {

    render() {
        return(
            <div>
                <h2>Twoje posty</h2>
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