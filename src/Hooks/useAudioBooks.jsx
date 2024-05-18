import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import UseAuth from "./UseAuth";

const useAudioBooks = () => {
    const axiosSecure = UseAxiosSecure();
    const { user } = UseAuth();

    const { data: addToCart = [], isLoading, refetch } = useQuery({
        queryKey: ["addToCart", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get('/addToCart');
            return res.data;
        }
    });

    return [addToCart, isLoading, refetch];
};

export default useAudioBooks;