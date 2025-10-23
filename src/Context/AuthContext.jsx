import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Load user from storage on mount
  useEffect(() => {
    const loadUser = () => {
      try {
        const savedUser = localStorage.getItem('user') || sessionStorage.getItem('user');
        
        if (savedUser) {
          const parsedUser = JSON.parse(savedUser);
          console.log("User loaded from storage:", parsedUser);
          setUser(parsedUser);
        } else {
          console.log("No user found in storage");
        }
      } catch (error) {
        console.error("Error loading user from storage:", error);
        // Clear corrupted data
        localStorage.removeItem('user');
        sessionStorage.removeItem('user');
      } finally {
        setLoading(false);
      }
    };

    loadUser();
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

        // ✅ Store in localStorage
        localStorage.setItem('user', JSON.stringify(userData));

        // ✅ Update state
        setUser(userData);
        
        toast.success(response.data.message || 'Login successful');
        return true;
      }

      toast.error(response.data.message || 'Login failed');
      return false;
      
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error.response?.data?.message || 'Something went wrong during login.');
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
      const errorMessage = err?.response?.data?.message || err?.response?.data?.error;
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

  // ✅ Only render children after loading is complete
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