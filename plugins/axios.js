const axios = ({ $axios, store }) => {
  //set base url
  if (process.env.NODE_ENV !== "production") {
    $axios.defaults.baseURL = "http://funditrack.com/api/organisation";
  } else {
    $axios.defaults.baseURL = "/api/organisation";
  }

  $axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response && error.response.status === 401) {
        store.$auth.logout();
      }
      return Promise.reject(error);
    }
  );
};

export default axios;
