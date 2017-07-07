/**
 * Created by react on 05.07.17.
 */
import React from "react";
import SearchPost from "./SearchPost";
import ParityList from "./lists/ParityList";
import { connect } from "react-redux";

class PostPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedValue: "",
    };
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
  };
};

export default connect(mapStateToProps)(PostPage);
