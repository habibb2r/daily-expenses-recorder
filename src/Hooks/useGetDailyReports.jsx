import { useQueries, useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useGetDailyReports = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: dailyReports, isLoading: loadDailyReports, refetch: reLoadDailyReports} = useQuery({
        queryKey: ['dailyReports'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/dailyReports?email=${user?.email}`)
            return res.data;
        }
    })
    return [dailyReports, loadDailyReports, reLoadDailyReports]
};

export default useGetDailyReports;