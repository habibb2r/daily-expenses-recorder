
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
    const { user, loading} = useAuth()

    if(loading){
        return <div className="loading loading-spinner loading-lg mx-auto"></div>
    }

    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default ProtectedRoutes;