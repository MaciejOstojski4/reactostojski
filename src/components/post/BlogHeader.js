/**
 * Created by react on 05.07.17.
 */
import React from "react";
import {Link} from "react-router";
import { connect } from "react-redux";
import {LOGOUT_ACTION} from "../../actions/actions";

class BlogHeader extends React.Component {

    logout = () => {
        return {
            type: LOGOUT_ACTION
        }
    };

    isLogged = userEmail => {
        if(userEmail !== "") {
            return "Email: " + userEmail;
        } else {
            return "Please login";
        }
    };

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
                        <li className="navbar-text">{this.isLogged(this.props.userEmail)}</li>
                        <li className="navbar-text">Post counter: {this.props.postQuantity}</li>
                        <li><Link to="/login-form">Login <span className="glyphicon glyphicon-log-in" /></Link></li>
                        <li><Link onClick={() => this.props.dispatch(this.logout())} to="/" >Logout <span className="glyphicon glyphicon-log-out" /></Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = currentState => {
    return {
        postQuantity: currentState.postsReducer.posts.length,
        userEmail: currentState.sessionReducer.userEmail
    }
};

export default connect(mapStateToProps)(BlogHeader);
