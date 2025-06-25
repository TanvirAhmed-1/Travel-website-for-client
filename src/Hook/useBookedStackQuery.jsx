
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useBookedStackQuery = () => {
    const axiosSecure=useAxiosSecure()
    const {data:Booking=[],refetch}=useQuery({
        queryKey:["Book"],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/book`)
            return res.data;
        }
    })
    return [Booking,refetch]
};

export default useBookedStackQuery;



  
