import axios from "axios";

export const axiosClientAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

// Setting Refresh Token
axiosClientAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    if (error.response.status === 401) {
      if (
        error.response.data.code &&
        error.response.data.code === "TOKEN_EXPIRED"
      ) {
        try {
          const data = await axiosClientAuth.get("/auth/tokenRefresh");
          return Promise.resolve(data);
        } catch (err) {
          return Promise.reject(err);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default {
  get: axiosClientAuth.get,
  post: axiosClientAuth.post,
  put: axiosClientAuth.put,
  delete: axiosClientAuth.delete,
};
