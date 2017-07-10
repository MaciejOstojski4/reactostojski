/**
 * Created by react on 06.07.17.
 */

export const INCREMENT_ACTION = "INCREMENT";
export const DECREMENT_ACTION = "DECREMENT";
export const LOGOUT_ACTION = "LOGOUT";
export const LOGIN_ACTION = "LOGIN";
export const SET_POSTS_LIST_ACTION = "SET_POSTS_LIST";
export const ADD_POST_ACTION = "ADD_POST";
export const DELETE_POST_ACTION = "DELETE_POST";
export const CHANGE_POST_TO_DISPLAY_ACTION = "CHANGE_POST_TO_DISPLAY";

export const setPostsListAction = postsList => {
  return {
    type: SET_POSTS_LIST_ACTION,
    data: postsList,
  };
};

export const addPostAction = post => {
  return {
    type: ADD_POST_ACTION,
    data: post,
  };
};

export const deletePostAction = id => {
  return {
    type: DELETE_POST_ACTION,
    data: id,
  };
};

export const loginAction = (email, token, userId) => {
  return {
    type: LOGIN_ACTION,
    data: {
      email: email,
      token: token,
      userId: userId,
    },
  };
};

export const logoutAction = () => {
  return {
    type: LOGOUT_ACTION,
  };
};

export const incrementAction = () => {
  return {
    type: INCREMENT_ACTION,
  };
};

export const decrementAction = () => {
  return {
    type: DECREMENT_ACTION,
  };
};

export const changePostToDisplayAction = postId => {
  return {
    type: CHANGE_POST_TO_DISPLAY_ACTION,
    postId: postId,
  };
};
