/**
 * Created by react on 05.07.17.
 */
import React from "react";

import PostForm from "./forms/PostForm";
import SearchPost from "../SearchPost";
import ParityList from "./lists/ParityList";
import { connect } from "react-redux";

class PostPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchedValue: ""
        }
    }

    search = title => {
        this.setState({
            searchedValue: title.toLowerCase()
        })
    };

    render() {
        let postsToDisplay = this.props.posts.filter(val => val.title.toLowerCase().includes(this.state.searchedValue));
        return (
            <div className="container">
                <div className="row">
                    <SearchPost onSearch={this.search}/>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <PostForm />
                    </div>
                    <div className="col-md-8">
                        <ParityList posts={postsToDisplay}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = currentState => {
    return {
        posts: currentState.posts,
        counter: currentState.counter
    }
};

export default connect(mapStateToProps)(PostPage);
