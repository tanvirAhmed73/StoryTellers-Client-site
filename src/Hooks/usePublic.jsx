import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://story-tellers-server-site-code.vercel.app"
})
const usePublic = () => {
    return axiosPublic;
};

export default usePublic;