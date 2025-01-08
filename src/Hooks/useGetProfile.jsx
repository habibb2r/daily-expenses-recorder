import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useGetProfile = () => {
    const {user, loading} = useAuth()
    const axiosSecure = useAxiosSecure()
    const{data: profile, isLoading: loadProfile, refetch: reLoadProfile} = useQuery({
        queryKey: ['profile'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/profile?email=${user?.email}`)
            return res.data;
        }
    })
    return [profile, loadProfile, reLoadProfile]
};

export default useGetProfile;