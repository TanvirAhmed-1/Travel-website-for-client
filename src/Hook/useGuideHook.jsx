import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGuideHook = () => {
    const axiosSecure=useAxiosSecure()
  const { data: guides = [], refetch } = useQuery({
    queryKey: ["guide"],
    queryFn: async () => {
      const res = await axiosSecure.get("/guides");
      return res.data;
    },
  });
  return [guides, refetch];
};

export default useGuideHook;
