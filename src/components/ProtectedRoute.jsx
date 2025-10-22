import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg font-semibold">
        Checking authentication...
      </div>
    );
  }

 
  if (!user) {
    return <Navigate to="/login" replace />;
  }


  return children;
};

export default ProtectedRoute;
