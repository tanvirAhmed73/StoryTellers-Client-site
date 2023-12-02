import axios from "axios";

const axiosSecure = axios.create({
    baseURL : 'https://project-eleven-server-site.vercel.app'
})
const UseAxiosSecure = () => {
    return axiosSecure;
};

export default UseAxiosSecure;