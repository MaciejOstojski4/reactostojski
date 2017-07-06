/**
 * Created by react on 06.07.17.
 */
import {createStore} from "redux";

const initialState=  {
    posts: [{id: 1, title: "Pierwszy tytuł", content: "Pierwszy content", author: "ja"},
        {id: 2, title: "Drugi tytuł", content: "Drugi content", author: "ja"},
        {id: 3, title: "Trzeci tytuł", content: "Trzeci content", author: "ja"},
        {id: 4, title: "Czwarty tytuł", content: "Czwarty content", author: "ja"}],
    counter: 0
};

const reducer = (currentState = initialState, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {...currentState, counter: currentState.counter + 1};
        case "DECREMENT":
            return {...currentState, counter: currentState.counter - 1};
        case "ADD_POST":
            return {...currentState, posts:[...currentState.posts, action.data] };
        case "DELETE_POST":
            return {...currentState, posts: currentState.posts.filter(val => val.id != action.data)};
        default:
            return currentState;
    }
};

const store = createStore(reducer);

export default store;
