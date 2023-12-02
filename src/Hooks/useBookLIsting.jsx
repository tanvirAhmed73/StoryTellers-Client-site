import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";

const useBookLIsting = () => {
    const axiosSecure = UseAxiosSecure();
    const {data: bookListing =[], isPending: loading, refetch} = useQuery({
        queryKey : ['bookListing'],
        queryFn: async() =>{
            const res = await axiosSecure.get('/book');
            return res.data;
        }
    })
    return [bookListing, loading, refetch]
};

export default useBookLIsting;