/**
 * Created by react on 10.07.17.
 */
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://praktyki-react.herokuapp.com"
});

const configureApi = store => {
  apiClient.interceptors.request.use(
    function(config) {
      const state = store.getState();
      if (state.sessionReducer.user.token) {
        config.headers["X-User-Email"] = state.sessionReducer.user.userEmail;
        config.headers["X-User-Token"] = state.sessionReducer.user.token;
      }
      return config;
    },
    function(error) {
      return Promise.reject(error);
    },
  );
};

export { configureApi };
export default apiClient;
