import axios from "axios";

export let axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

// axiosInstance.interceptors.request.use(req => {
//   console.log(req);
// });

// axiosInstance.interceptors.response.use(res => {
//   console.log(res);
// });
