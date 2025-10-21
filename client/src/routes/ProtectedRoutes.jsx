import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.jsx";


const ProtectedRoutes = () => {
  
    const {data:user, isLoading, isError} = useAuth();

    if (isLoading) {
        return <div>Loading user...</div>; // Or a spinner component
    }

    if (!isLoading && (isError || !user)) {
        return <Navigate to='/login' replace />;
    }

    return <Outlet></Outlet>
}

export default ProtectedRoutes;