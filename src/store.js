/**
 * Created by react on 06.07.17.
 */
import {createStore, combineReducers} from "redux";

const initialState = {
    posts: [{id: 1, title: "Pierwszy tytuł", content: "Pierwszy content", author: "ja"},
        {id: 2, title: "Drugi tytuł", content: "Drugi content", author: "ja"},
        {id: 3, title: "Trzeci tytuł", content: "Trzeci content", author: "ja"},
        {id: 4, title: "Czwarty tytuł", content: "Czwarty content", author: "ja"}],
};

const initialSession = {
    userEmail: ""
};

const sessionReducer = (currentState = initialSession, action) => {
    switch(action.type) {
        case "LOGIN":
            return { userEmail: action.data };
        case "LOGOUT":
            return { userEmail: "" };
        default:
            return currentState;
    }
};

const counterReducer = (currentState = 0, action) => {
    switch(action.type) {
        case "INCREMENT":
            return currentState + 1;
        case "DECREMENT":
            return currentState - 1;
        default:
            return currentState;
    }
};

const postsReducer = (currentState = initialState, action) => {
    switch(action.type) {
        case "ADD_POST":
            return {...currentState, posts:[...currentState.posts, action.data] };
        case "DELETE_POST":
            return {...currentState, posts: currentState.posts.filter(val => val.id != action.data)};
        default:
            return currentState;
    }
};

const rootReducer = combineReducers({
    postsReducer: postsReducer,
    counterReducer: counterReducer,
    sessionReducer: sessionReducer
});

const store = createStore(rootReducer);

export default store;
