/**
 * Created by react on 06.07.17.
 */
import {createStore} from "redux";

const reducer = (currentState = 0, action) => {
    switch(action.type) {
        case "INCREMENT":
            return currentState + 1;
            break;
        case "DECREMENT":
            return currentState - 1;
            break;
        default:
            return currentState;
            break;
    }
};

const store = createStore(reducer);


export default store;
