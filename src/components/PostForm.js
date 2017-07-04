/**
 * Created by react on 04.07.17.
 */
import React from 'react';

class PostForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            post: {title: "", content: "", author: ""}
        }
    }

    refreshTitleState = (e) => {
        this.setState({
            post: {...this.state.post, title: e.target.value}
        })
    };

    refreshContentState = (e) => {
        this.setState({
            post: {...this.state.post, content: e.target.value}
        });
    };

    refreshAuthorState = (e) => {
        this.setState({
            post: {...this.state.post, author: e.target.value}
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.post);
        this.clearForm();
    };

    clearForm = () => {
        this.setState({
            post: {title: "", content: "", author: ""}
        })
    };

    render() {
        return (
            <div>
                <h2>Add new Post</h2>
                <form>
                    <div className="form-group">
                        <label>Title</label>
                        <input placeholder="title" type="text" value={this.state.post.title} onChange={this.refreshTitleState} />
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <input placeholder="content" type="text" value={this.state.post.content} onChange={this.refreshContentState} />
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <input placeholder="Author" type="text" value={this.state.post.author} onChange={this.refreshAuthorState} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-default" onClick={this.onSubmit} type="submit">Potwierdź</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PostForm;
