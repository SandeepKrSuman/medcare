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

  unverified: () => {
    return axios.get(`${baseUrl}/users/unverified`);
  },

  findUser: (body) => {
    return axios.post(`${baseUrl}/users/finduser`, body);
  },

  verify: (body) => {
    return axios.post(`${baseUrl}/users/unverified/verify`, body);
  },

  reject: (body) => {
    return axios.delete(`${baseUrl}/users/unverified/reject`, body);
  },

  docList: () => {
    return axios.get(`${baseUrl}/users/doctors`);
  },

  staffList: () => {
    return axios.get(`${baseUrl}/users/staffs`);
  },

  getFeedbacks: () => {
    return axios.get(`${baseUrl}/users/feedbacks`);
  },

  generateStats: () => {
    return axios.get(`${baseUrl}/generate/stats`);
  },

  bookAppointment: (body) => {
    return axios.post(`${baseUrl}/appointment/book`, body);
  },

  duePayment: (body) => {
    return axios.post(`${baseUrl}/appointment/duepayment`, body);
  },

  makePayment: (body) => {
    return axios.post(`${baseUrl}/appointment/duepayment/makepayment`, body);
  },

  myAppointments: (body) => {
    return axios.post(`${baseUrl}/patient/appointments`, body);
  },

  cancelAppointment: (body) => {
    return axios.post(`${baseUrl}/appointment/cancel`, body);
  },

  prescriptions: (body) => {
    return axios.post(`${baseUrl}/patient/prescriptions`, body);
  },

  writeFeedback: (body) => {
    return axios.post(`${baseUrl}/patient/appointments/feedbacks/write`, body);
  },

  deleteFeedback: (body) => {
    return axios.post(`${baseUrl}/patient/appointments/feedbacks/delete`, body);
  },

  docAppointments: (body) => {
    return axios.post(`${baseUrl}/doctor/appointments`, body);
  },

  uploadPrescription: (body) => {
    return axios.post(`${baseUrl}/doctor/prescription/upload`, body);
  },

  docFeedbacks: (body) => {
    return axios.post(`${baseUrl}/doctor/appointments/feedbacks`, body);
  },

  findPatient: (body) => {
    return axios.post(`${baseUrl}/staff/find/patient`, body);
  },
};

export default api;
