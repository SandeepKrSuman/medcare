import axios from "axios";

const baseUrl = "http://localhost:5000/api";

axios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["x-auth-token"] = accessToken;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem("refreshToken");

    if (
      refreshToken &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const res = await axios.post(`${baseUrl}/auth/refresh`, {
          refreshToken,
        });

        if (res.status === 200) {
          localStorage.setItem("accessToken", res.data.accessToken);
          return axios(originalRequest);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

const api = {
  signup: (body) => {
    return axios.post(`${baseUrl}/auth/signup`, body);
  },

  signin: (body) => {
    return axios.post(`${baseUrl}/auth/signin`, body);
  },

  refreshToken: (body) => {
    return axios.post(`${baseUrl}/auth/refresh`, body);
  },

  logout: (body) => {
    return axios.delete(`${baseUrl}/auth/logout`, body);
  },
};

export default api;
