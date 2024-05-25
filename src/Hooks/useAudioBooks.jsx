import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import UseAuth from "./UseAuth";

const useAudioBooks = () => {
    const axiosSecure = UseAxiosSecure();
    const {user} = UseAuth()

    const { data: addToCart = [], isLoading, refetch } = useQuery({
        queryKey: ["addToCart", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/addToCart?email=${user?.email}`);
            return res.data;
        },
        enabled: !!user
    });

    return [addToCart, isLoading, refetch];
};

export default useAudioBooks;