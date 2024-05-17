import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";

const useBookLIsting = () => {
    const axiosSecure = UseAxiosSecure();
    const {data: bookListing =[], isLoading, refetch} = useQuery({
        queryKey : ['bookListing'],
        queryFn: async() =>{
            const res = await axiosSecure.get('/book');
            return res.data;
        }
    })
    return [bookListing, isLoading,  refetch]
};

export default useBookLIsting;