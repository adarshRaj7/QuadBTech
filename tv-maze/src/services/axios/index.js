import axios from "axios";



const axiosInstance = axios.create({
  baseURL: "https://api.tvmaze.com/search/shows?q=all"
});
export default axiosInstance;

