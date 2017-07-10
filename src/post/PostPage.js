/**
 * Created by react on 05.07.17.
 */
import React from "react";
import SearchPost from "./SearchPost";
import ParityList from "./lists/ParityList";
import { connect } from "react-redux";
import { deleteAction, setPostsListAction } from "../actions/actions";
import axios from "axios";

class PostPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedValue: "",
    };
  }

  prepareHeadersWithAuth = () => {
    return {
      headers: {
        "X-User-Email": this.props.user.userEmail,
        "X-User-Token": this.props.user.token,
      },
    };
  };

  componentDidMount() {
    axios
      .get(GET_POSTS_LIST_URL, this.prepareHeadersWithAuth())
      .then(response => {
        const postsList = response.data.posts;
        this.props.dispatch(setPostsListAction(postsList));
      })
      .catch(error => {
        console.log("Error occured while app try to fetch posts: " + error);
      });
  }

  search = title => {
    this.setState({
      searchedValue: title.toLowerCase(),
    });
  };

  render() {
    let postsToDisplay = this.props.postsReducer.posts.filter(val =>
      val.title.toLowerCase().includes(this.state.searchedValue),
    );
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-3">
            <SearchPost onSearch={this.search} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-1">
            <ParityList posts={postsToDisplay} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = currentState => {
  return {
    postsReducer: currentState.postsReducer,
    counter: currentState.counterReducer,
    user: currentState.sessionReducer.user,
  };
};

const GET_POSTS_LIST_URL =
  "https://praktyki-react.herokuapp.com/example/api/v1/posts";

export default connect(mapStateToProps)(PostPage);
