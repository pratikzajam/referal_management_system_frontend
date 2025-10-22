import React, { useState } from 'react';
import { Users, Mail, Lock, Eye, EyeOff, ArrowRight, Check } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import axios from 'axios';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    let response = await login(email, password);

    if (response) {
      setLoading(false);
      setTimeout(() => {
        navigate("/dashboard")
      }, 1000)
    }

  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <ToastContainer position="top-right" autoClose={3000} />
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Side - Branding */}
        <div className="hidden lg:block text-white space-y-8 px-8">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-xl">
              <Users className="w-10 h-10 text-white" />
            </div>
            <span className="text-3xl font-bold">ReferralHub</span>
          </div>

          <div>
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              Welcome Back to the Future of Hiring
            </h1>
            <p className="text-xl text-gray-300">
              Connect with top talent and transform your recruitment process with employee referrals.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-green-500 bg-opacity-20 p-2 rounded-lg mt-1">
                <Check className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Track Referrals in Real-Time</h3>
                <p className="text-gray-400">Monitor every candidate through the hiring pipeline</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-green-500 bg-opacity-20 p-2 rounded-lg mt-1">
                <Check className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Smart Analytics Dashboard</h3>
                <p className="text-gray-400">Get insights into your referral performance</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-green-500 bg-opacity-20 p-2 rounded-lg mt-1">
                <Check className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Seamless Collaboration</h3>
                <p className="text-gray-400">Work together with HR and hiring managers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white bg-opacity-10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white border-opacity-20">
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center justify-center space-x-3 mb-8">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-xl">
                <Users className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">ReferralHub</span>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
              <p className="text-gray-300">Sign in to your account to continue</p>
            </div>

            <div className="space-y-6">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl pl-12 pr-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                    ) : (
                      <Eye className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-pink-500 focus:ring-pink-500 focus:ring-offset-0"
                  />
                  <span className="text-sm text-gray-300">Remember me</span>
                </label>
                <button className="text-sm text-pink-400 hover:text-pink-300 transition-colors font-medium">
                  Forgot password?
                </button>
              </div>

              {/* Login Button */}
              <button
                onClick={handleLogin}
                disabled={loading}
                className={`w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl font-bold text-lg 
                  hover:shadow-2xl transition-all duration-300 transform hover:scale-105 
                  flex items-center justify-center space-x-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                <span>{loading ? 'Signing in...' : 'Sign In'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Sign Up Link */}
              <div className="text-center pt-4">
                <p className="text-gray-300">
                  Don't have an account?{' '}
                  <button
                    onClick={() => navigate('/signup')}
                    className="text-pink-400 hover:text-pink-300 font-semibold transition-colors"
                  >
                    Sign up
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* Terms */}
          <p className="text-center text-sm text-gray-400 mt-6">
            By signing in, you agree to our{' '}
            <button className="text-pink-400 hover:text-pink-300 transition-colors">Terms</button>
            {' '}and{' '}
            <button className="text-pink-400 hover:text-pink-300 transition-colors">Privacy Policy</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;