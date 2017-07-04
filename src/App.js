import React, { Component } from 'react';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
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
            posts: this.state.posts.filter(val => val.id != id)
    })};

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <PostForm onSubmit={this.addPost}/>
                    </div>
                    <div className="col-md-6">
                        <PostList posts={this.state.posts} onDelete={this.deletePost}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
