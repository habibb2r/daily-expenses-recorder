
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Reuseable/Loading';

const RedirectRouting = ({children}) => {
    const location = useLocation()
    const { user, loading} = useAuth()

    if(loading){
        return <Loading></Loading>
    }

    if(user){
        return <Navigate to='/' state={{from: location}} replace></Navigate>
    }
    return children
};

export default RedirectRouting;