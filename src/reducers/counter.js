/**
 * Created by react on 06.07.17.
 */

const counter = (currentState = 0, action) => {
    switch(action.type) {
        case "INCREMENT":
            return currentState + 1;
        case "DECREMENT":
            return currentState - 1;
        default:
            return currentState;
    }
};

export const counterReducer = counter;