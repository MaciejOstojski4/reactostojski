/**
 * Created by react on 05.07.17.
 */
import React from "react";
import {Link} from "react-router";

class BlogHeader extends React.Component {

    render() {
        return (
            <div className="navbar navbar-default">
                <div class="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">Blog</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to="/posts">Post list</Link></li>
                        <li><Link to="/post-details">Post details</Link></li>
                        <li>Posts counter: {this.props.postsQuantity}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default BlogHeader;
