/**
 * Created by react on 05.07.17.
 */
import React from "react";

import PostForm from "./forms/PostForm";
import SearchPost from "../SearchPost";
import ParityList from "./lists/ParityList";

class PostPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [{id: 1, title: "Pierwszy tytuł", content: "Pierwszy content", author: "ja"},
                {id: 2, title: "Drugi tytuł", content: "Drugi content", author: "ja"},
                {id: 3, title: "Trzeci tytuł", content: "Trzeci content", author: "ja"},
                {id: 4, title: "Czwarty tytuł", content: "Czwarty content", author: "ja"}],

            searchedValue: ""
        }
    }

    addPost = post => {
        this.setState({
            posts:[
                ...this.state.posts,
                {id: Math.random(), title: post.title, content: post.content, author: post.author }
            ]
        })
    };

    deletePost = id => {
        this.setState({
            posts: this.state.posts.filter(val => val.id !== id)
        })};

    search = title => {
        this.setState({
            searchedValue: title.toLowerCase()
        })
    };

    render() {
        let postsToDisplay = this.state.posts.filter(val => val.title.toLowerCase().includes(this.state.searchedValue));
        return (
            <div className="container">
                <div className="row">
                    <SearchPost onSearch={this.search}/>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <PostForm onSubmit={this.addPost}/>
                    </div>
                    <div className="col-md-8">
                        <ParityList posts={postsToDisplay} onDelete={this.deletePost}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostPage;
