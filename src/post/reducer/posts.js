/**
 * Created by react on 06.07.17.
 */

import {
  ADD_POST_ACTION,
  DELETE_POST_ACTION,
  CHANGE_POST_TO_DISPLAY_ACTION,
  SET_POSTS_LIST_ACTION,
} from "../../actions/actions";

const initialState = {
  posts: [],
  postToDisplayId: -1,
};

const posts = (currentState = initialState, action) => {
  switch (action.type) {
    case ADD_POST_ACTION:
      return { ...currentState, posts: [...currentState.posts, action.data] };
    case DELETE_POST_ACTION:
      return {
        ...currentState,
        posts: currentState.posts.filter(val => val.id !== action.data),
      };
    case CHANGE_POST_TO_DISPLAY_ACTION:
      return { ...currentState, postToDisplayId: action.postId };
    case SET_POSTS_LIST_ACTION:
      return {
        posts: action.data,
        postToDisplayId: -1,
      };
    default:
      return currentState;
  }
};

export const postsReducer = posts;
