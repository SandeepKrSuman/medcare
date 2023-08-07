import axios from "axios";
const axiosInstance = axios.create();

const serverUrl = process.env.REACT_APP_SERVER || "http://localhost:5000";
const baseUrl = `${serverUrl}/api`;

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

const refresh = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  if (refreshToken) {
    try {
      const res = await axiosInstance.post(`${baseUrl}/auth/refresh`, {
        refreshToken,
      });
      if (res.status === 200) {
        localStorage.setItem("accessToken", res.data.accessToken);
        return res.data.accessToken;
      }
    } catch (err) {
      console.error(err);
    }
  }

  return null;
};

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const accessToken = await refresh();
      if (accessToken) {
        return axios(originalRequest);
      } else {
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("accessToken");
        window.location.href = "/signin";
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
