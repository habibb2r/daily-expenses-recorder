
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Reuseable/Loading';

const ProtectedRoutes = ({children}) => {
    const location = useLocation()
    const { user, loading} = useAuth()

    if(loading){
        return <Loading></Loading>
    }

    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default ProtectedRoutes;