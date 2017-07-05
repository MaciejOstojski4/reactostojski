import React, {Component} from "react";
import "./App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import SearchPost from "./components/SearchPost";

class App extends Component {

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
            searchedValue: title
        })
    };

    render() {
        console.log(this.state.searchedValue);
        let postsToDisplay = this.state.posts.filter(val => val.title.includes(this.state.searchedValue));
        return (
            <div className="container">
                <div className="navbar navbar-default">
                    <div class="container-fluid">
                        <div className="navbar-header">
                            <span className="navbar-brand">Blog</span>
                        </div>
                        <div className="navbar-form navbar-left">
                            <SearchPost onSearch={this.search}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <PostForm onSubmit={this.addPost}/>
                    </div>
                    <div className="col-md-8">
                        <PostList posts={postsToDisplay} onDelete={this.deletePost}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
