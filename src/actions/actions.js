/**
 * Created by react on 06.07.17.
 */

export const INCREMENT_ACTION = "INCREMENT";
export const DECREMENT_ACTION = "DECREMENT";
export const LOGOUT_ACTION = "LOGOUT";
export const LOGIN_ACTION = "LOGIN";
export const ADD_POST_ACTION = "ADD_POST";
export const DELETE_POST_ACTION = "DELETE_POST";


export const addPostAction = post => {
    return {
        type: ADD_POST_ACTION,
        data: post
    }
};


export const deletePostAction = id => {
    return {
        type: DELETE_POST_ACTION,
        data: id
    }
};

export const loginAction = email => {
    return {
        type: LOGIN_ACTION,
        data: email
    }
};

export const logoutAction = () => {
    return {
        type: LOGOUT_ACTION
    }
};

export const incrementAction = () => {
    return {
        type: INCREMENT_ACTION
    }
};

export const decrementAction = () => {
    return {
        type: DECREMENT_ACTION
    }
};
