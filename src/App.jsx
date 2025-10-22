import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
  
      <>
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
     </>
    
  );
}

export default App;