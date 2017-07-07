/**
 * Created by react on 06.07.17.
 */

import { LOGIN_ACTION, LOGOUT_ACTION } from "../../actions/actions";

const initialSession = {
  user: {
    token: undefined,
    userEmail: "",
  },
  userEmail: "",
};

const session = (currentState = initialSession, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return {
        user: {
          token: action.data.token,
          userEmail: action.data.email,
        },
      };
    case LOGOUT_ACTION:
      return {
        user: {
          token: undefined,
          userEmail: "",
        },
      };
    default:
      return currentState;
  }
};

export const sessionReducer = session;
