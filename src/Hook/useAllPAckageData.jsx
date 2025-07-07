import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllPAckageData = () => {
  const axiosSecure = useAxiosSecure();
  const { data: Package = [], refetch } = useQuery({
    queryKey: ["AllPackage"],
    queryFn: async () => {
      const res = await axiosSecure.get("/addData");
      return res.data;
    },
  });

  return [Package, refetch];
};

export default useAllPAckageData;
