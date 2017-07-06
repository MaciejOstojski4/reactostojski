/**
 * Created by react on 06.07.17.
 */
import {createStore, combineReducers} from "redux";

import {counterReducer} from "./reducers/counter";
import {postsReducer} from "./reducers/posts";
import {sessionReducer} from "./reducers/session";

const rootReducer = combineReducers({
    postsReducer: postsReducer,
    counterReducer: counterReducer,
    sessionReducer: sessionReducer
});

const store = createStore(rootReducer);

export default store;
