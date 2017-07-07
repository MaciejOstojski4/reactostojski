/**
 * Created by react on 06.07.17.
 */

const initialSession = {
    userEmail: ""
};

const session = (currentState = initialSession, action) => {
    switch(action.type) {
        case "LOGIN":
            return { userEmail: action.data };
        case "LOGOUT":
            return { userEmail: "" };
        default:
            return currentState;
    }
};

export const sessionReducer = session;
