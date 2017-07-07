/**
 * Created by react on 05.07.17.
 */
import React from "react";
import PostList from "./PostList";

class ParityList extends React.Component {

  render() {
    let parityList = this.props.posts.map((val, index) => {
      let newTitle = val.title;
      if (index%2 === 0) {
        newTitle += " Parzysty";
      } else {
        newTitle += " Nieparzysty";
      }
      return {...val, title: newTitle};
    });
    return (
      <PostList {...this.props} posts={parityList} />
    )
  }
}

export default ParityList;
