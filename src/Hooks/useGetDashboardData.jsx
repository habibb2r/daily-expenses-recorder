import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useGetDashboardData = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure()
    const {data: dashboardData, isLoading, refetch} = useQuery({
        queryKey: ['dashboardData'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/dashboardData?email=${user?.email}`)
            return res.data;
        }
    })
    return [dashboardData, isLoading, refetch]
};

export default useGetDashboardData;