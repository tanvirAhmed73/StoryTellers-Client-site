import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import UseAuth from "./UseAuth";

const UseBorrow = () => {
    const axiosSecure = UseAxiosSecure()
    const {user} = UseAuth()
    const {data: borrow = [], refetch} = useQuery({
        queryKey: ['borrow', user?.email],
        queryFn : async ()=>{
            const res = await axiosSecure.get(`/addborrow`)
            return res.data;
        }
    })
    return [borrow, refetch];
};

export default UseBorrow;