/**
 * Created by react on 06.07.17.
 */
import { createStore, combineReducers, compose } from "redux";
import persistState from "redux-localstorage";
import { counterReducer } from "./counter";
import { postsReducer } from "./post/reducer/posts";
import { sessionReducer } from "./user/reducer/session";

const rootReducer = combineReducers({
  postsReducer: postsReducer,
  counterReducer: counterReducer,
  sessionReducer: sessionReducer,
});

//const enhancer = compose(persistState("sessionReducer"));

const store = createStore(rootReducer)//, {}, enhancer);

export default store;
