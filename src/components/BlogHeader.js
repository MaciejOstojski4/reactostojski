/**
 * Created by react on 05.07.17.
 */
import React from "react";
import {Link} from "react-router";
import { connect } from "react-redux";

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
                        <li><Link to="/post-form">Post form</Link></li>
                        <li><Link to="/post-details">Post details</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="navbar-text">Post counter: {this.props.postQuantity}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = currentState => {
    return {
        postQuantity: currentState.posts.length
    }
};

export default connect(mapStateToProps)(BlogHeader);
