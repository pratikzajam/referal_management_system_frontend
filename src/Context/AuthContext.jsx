import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const savedUser =
      localStorage.getItem('user') || sessionStorage.getItem('user');

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

 
  const login = async (email, password) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );

      if (response.data.status) {
        const userData = response.data.data;

       
        localStorage.setItem('user', JSON.stringify(userData));

        setUser(userData);
        toast.success(response.data.message || 'Login successful');
        return true;
      }

      toast.error(response.data.message || 'Login failed');
      return false;
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Something went wrong during login.');
      return false;
    }
  };

 
  const logout = () => {
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    setUser(null);
    toast.success('Logged out successfully');
  };

 
  const signup = async (userData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/signup`,
        userData
      );
      const { status, message } = response.data;

      if (!status) {
        toast.error(message || 'Signup failed');
        return false;
      }

      toast.success(message || 'Signup successful');
      return true;
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message || err?.response?.data?.error;
      toast.error(errorMessage || 'Signup failed. Please try again.');
      return false;
    }
  };

  const value = {
    user,
    login,
    logout,
    signup,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// ✅ Custom hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};