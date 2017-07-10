/**
 * Created by react on 06.07.17.
 */

import { LOGIN_ACTION, LOGOUT_ACTION } from "../../actions/actions";

const initialSession = {
  user: {
    token: undefined,
    userEmail: "",
    userId: ""
  },
  userEmail: "",
};

const session = (currentState = initialSession, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      console.log("USER_ID: " + action.data.userId);
      return {
        user: {
          token: action.data.token,
          userEmail: action.data.email,
          userId: action.data.userId
        },
      };
    case LOGOUT_ACTION:
      return {
        user: {
          token: undefined,
          userEmail: "",
          userId: ""
        },
      };
    default:
      return currentState;
  }
};

export const sessionReducer = session;
