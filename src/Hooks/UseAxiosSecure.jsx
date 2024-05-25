import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://story-tellers-server-site-code.vercel.app",
});
const UseAxiosSecure = () => {
  return axiosSecure;
};

export default UseAxiosSecure;
