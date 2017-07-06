/**
 * Created by react on 06.07.17.
 */

const initialState = {
    posts: [{id: 1, title: "Pierwszy tytuł", content: "Pierwszy content", author: "ja"},
        {id: 2, title: "Drugi tytuł", content: "Drugi content", author: "ja"},
        {id: 3, title: "Trzeci tytuł", content: "Trzeci content", author: "ja"},
        {id: 4, title: "Czwarty tytuł", content: "Czwarty content", author: "ja"}],
};

const posts = (currentState = initialState, action) => {
    switch(action.type) {
        case "ADD_POST":
            return {...currentState, posts:[...currentState.posts, action.data] };
        case "DELETE_POST":
            return {...currentState, posts: currentState.posts.filter(val => val.id != action.data)};
        default:
            return currentState;
    }
};

export const postsReducer = posts;