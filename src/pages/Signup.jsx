import React, { useState } from 'react';
import { Users, Mail, Lock, Eye, EyeOff, ArrowRight, Check, User, Building } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Client-side validation only for required fields; success/error messages come from backend
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.password) {
      toast.error('Please fill required fields.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }
    if (!formData.agreeToTerms) {
      toast.error('You must agree to the Terms of Service.');
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword
      };

      const success = await signup(payload);

      if (success) {
        setTimeout(() => {
          navigate('/login');
        }, 1200);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover />

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
              Start Your Journey to Better Hiring
            </h1>
            <p className="text-xl text-gray-300">
              Join thousands of companies transforming their recruitment with employee referrals.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-green-500 bg-opacity-20 p-2 rounded-lg mt-1">
                <Check className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Free 14-Day Trial</h3>
                <p className="text-gray-400">No credit card required to get started</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-green-500 bg-opacity-20 p-2 rounded-lg mt-1">
                <Check className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Easy Setup</h3>
                <p className="text-gray-400">Get up and running in less than 5 minutes</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-green-500 bg-opacity-20 p-2 rounded-lg mt-1">
                <Check className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">24/7 Support</h3>
                <p className="text-gray-400">Our team is here to help you succeed</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-green-500 bg-opacity-20 p-2 rounded-lg mt-1">
                <Check className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Unlimited Referrals</h3>
                <p className="text-gray-400">No limits on candidates or team members</p>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20">
            <p className="text-gray-300 italic mb-3">
              "ReferralHub transformed our hiring process. We've seen a 3x increase in quality candidates!"
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                JS
              </div>
              <div>
                <div className="font-bold text-white">Jessica Smith</div>
                <div className="text-sm text-gray-400">HR Director, TechCorp</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Sign Up Form */}
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
              <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
              <p className="text-gray-300">Start your free trial today</p>
            </div>

            <form className="space-y-5" onSubmit={handleSignUp}>
              {/* Full Name Input */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

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
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
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
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Create a password"
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
                {/* Password Guidelines */}
            
              </div>

              {/* Confirm Password Input */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl pl-12 pr-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                    ) : (
                      <Eye className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="w-4 h-4 rounded border-gray-300 text-pink-500 focus:ring-pink-500 focus:ring-offset-0 mt-1"
                />
                <label className="text-sm text-gray-300">
                  I agree to the{' '}
                  <button type="button" className="text-pink-400 hover:text-pink-300 transition-colors font-medium">
                    Terms of Service
                  </button>
                  {' '}and{' '}
                  <button type="button" className="text-pink-400 hover:text-pink-300 transition-colors font-medium">
                    Privacy Policy
                  </button>
                </label>
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full ${loading ? 'opacity-70 cursor-not-allowed' : ''} bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}
              >
                <span>{loading ? 'Creating account...' : 'Create Account'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white border-opacity-20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-transparent text-gray-400">Or sign up with</span>
                </div>
              </div>

              {/* Login Link */}
              <div className="text-center pt-4">
                <p className="text-gray-300">
                  Already have an account?{' '}
                  <button type="button" className="text-pink-400 hover:text-pink-300 font-semibold transition-colors" onClick={() => { window.location.href = '/login'; }}>
                    Sign in
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;