/**
 * Created by react on 06.07.17.
 */

import {INCREMENT_ACTION, DECREMENT_ACTION} from "../actions/actions";
// import {DECREMENT_ACTION} from "../actions/actions"

const counter = (currentState = 0, action) => {
    console.log(action.type);
    switch(action.type) {
        case INCREMENT_ACTION:
            return currentState + 1;
        case DECREMENT_ACTION:
            return currentState - 1;
        default:
            return currentState;
    }
};

export const counterReducer = counter;