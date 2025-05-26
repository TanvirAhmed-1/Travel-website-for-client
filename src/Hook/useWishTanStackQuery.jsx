import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useWishTanStackQuery = () => {
    const{user}=useContext(AuthContext)
    const axiosSecure=useAxiosSecure()

    const{data:wish, refetch}=useQuery({
        queryKey:["wish",user?.email],
        queryFn:async ()=>{
            const res=await axiosSecure.get(`/wish?email=${user?.email}`)
            return res.data
        }
    })

   return [wish,refetch]
};

export default useWishTanStackQuery;