/**
 * Created by react on 06.07.17.
 */
import {createStore, combineReducers} from "redux";

import {counterReducer} from "./counter";
import {postsReducer} from "./post/reducer/posts";
import {sessionReducer} from "./user/reducer/session";

const rootReducer = combineReducers({
    postsReducer: postsReducer,
    counterReducer: counterReducer,
    sessionReducer: sessionReducer
});

const store = createStore(rootReducer);

export default store;
