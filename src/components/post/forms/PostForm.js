/**
 * Created by react on 04.07.17.
 */
import React from "react";

import Button from "../../generic/button";
import {connect} from "react-redux";
import { withRouter } from "react-router";

class PostForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            post: {id: Math.random(), title: "", content: "", author: ""}
        }
    }

    refreshState = (e) => {
        switch(e.target.id) {
            case "titleInput":
                this.setState({
                    post: {...this.state.post, title: e.target.value}
                });
                break;
            case "contentInput":
                this.setState({
                    post: {...this.state.post, content: e.target.value}
                });
                break;
            case "authorInput":
                this.setState({
                    post: {...this.state.post, author: e.target.value}
                });
                break;
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch({type: "ADD_POST", data: this.state.post});
        this.props.router.push("posts");
    };

    render() {
        return (
            <div>
                <div className="text-center">
                    <h2>Add new Post</h2>
                </div>
                <form>
                    <div className="form-group">
                        <label>Title</label>
                        <input className="form-control" id="titleInput" placeholder="Title" type="text" value={this.state.post.title} onChange={this.refreshState} />
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <textArea rows="20" className="form-control" id="contentInput" placeholder="Content" type="text" value={this.state.post.content} onChange={this.refreshState} />
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <input className="form-control" id="authorInput" placeholder="Author" type="text" value={this.state.post.author} onChange={this.refreshState} />
                    </div>
                    <div className="form-group text-center">
                        <Button className="btn btn-success" onClick={this.onSubmit} label="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default connect()(withRouter(PostForm));
