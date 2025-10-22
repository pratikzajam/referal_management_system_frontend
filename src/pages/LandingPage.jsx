import React from 'react';
import { Users, TrendingUp, Award, Shield, Zap, Target, ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

     const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Navigation */}
      <nav className="bg-black bg-opacity-20 backdrop-blur-lg border-b border-white border-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">ReferralHub</span>
            </div>
            <div className="flex items-center space-x-4">
              <button  onClick={() => navigate('/login')} className="text-white hover:text-pink-300 px-4 py-2 rounded-lg transition-colors font-medium">
                Login
              </button>
              <button 
              
                onClick={() => navigate('/signup')}
              
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-white mb-6 leading-tight">
            Transform Your Hiring with
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"> Employee Referrals</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Empower your team to refer top talent. Track candidates effortlessly. Build a stronger workforce together.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-bold text-lg flex items-center space-x-2">
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white bg-opacity-10 backdrop-blur-lg text-white border-2 border-white border-opacity-30 px-8 py-4 rounded-lg hover:bg-opacity-20 transition-all font-bold text-lg">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all">
            <div className="text-5xl font-bold text-pink-400 mb-2">10K+</div>
            <div className="text-gray-300 font-medium">Active Users</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all">
            <div className="text-5xl font-bold text-purple-400 mb-2">50K+</div>
            <div className="text-gray-300 font-medium">Referrals Made</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all">
            <div className="text-5xl font-bold text-blue-400 mb-2">85%</div>
            <div className="text-gray-300 font-medium">Success Rate</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all">
            <div className="text-5xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-gray-300 font-medium">Support Available</div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Everything You Need to <span className="text-pink-400">Succeed</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all hover:scale-105 duration-300">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Real-Time Tracking</h3>
              <p className="text-gray-300">
                Monitor candidate progress through every stage of the hiring pipeline with instant updates and notifications.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all hover:scale-105 duration-300">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-300">
                Submit referrals in seconds with our intuitive interface. No complicated forms or lengthy processes.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all hover:scale-105 duration-300">
              <div className="bg-gradient-to-r from-indigo-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Secure & Private</h3>
              <p className="text-gray-300">
                Enterprise-grade security ensures all candidate data is protected with end-to-end encryption.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all hover:scale-105 duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart Analytics</h3>
              <p className="text-gray-300">
                Gain insights into referral performance with comprehensive dashboards and detailed reports.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all hover:scale-105 duration-300">
              <div className="bg-gradient-to-r from-cyan-500 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Reward System</h3>
              <p className="text-gray-300">
                Built-in rewards tracking helps you recognize and incentivize successful referrals automatically.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all hover:scale-105 duration-300">
              <div className="bg-gradient-to-r from-teal-500 to-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Team Collaboration</h3>
              <p className="text-gray-300">
                Enable seamless collaboration between HR teams, managers, and employees throughout the process.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            How It <span className="text-pink-400">Works</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white">
                1
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Submit Referral</h3>
              <p className="text-gray-300">
                Fill out a quick form with candidate details and submit their resume in just a few clicks.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white">
                2
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Track Progress</h3>
              <p className="text-gray-300">
                Watch as your referral moves through the hiring stages with real-time status updates.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-indigo-500 to-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white">
                3
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Earn Rewards</h3>
              <p className="text-gray-300">
                Get recognized and rewarded when your referral successfully joins the team.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Hiring?
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8">
            Join thousands of companies building better teams through employee referrals.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-bold text-lg">
              Start Free Trial
            </button>
            <button className="bg-white bg-opacity-20 backdrop-blur-lg text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-opacity-30 transition-all font-bold text-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black bg-opacity-30 backdrop-blur-lg border-t border-white border-opacity-10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">ReferralHub</span>
              </div>
              <p className="text-gray-400">
                The modern way to manage employee referrals and build exceptional teams.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <div className="space-y-2">
                <div className="text-gray-400 hover:text-pink-400 cursor-pointer transition-colors">Features</div>
                <div className="text-gray-400 hover:text-pink-400 cursor-pointer transition-colors">Pricing</div>
                <div className="text-gray-400 hover:text-pink-400 cursor-pointer transition-colors">Demo</div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <div className="space-y-2">
                <div className="text-gray-400 hover:text-pink-400 cursor-pointer transition-colors">About</div>
                <div className="text-gray-400 hover:text-pink-400 cursor-pointer transition-colors">Blog</div>
                <div className="text-gray-400 hover:text-pink-400 cursor-pointer transition-colors">Careers</div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Support</h4>
              <div className="space-y-2">
                <div className="text-gray-400 hover:text-pink-400 cursor-pointer transition-colors">Help Center</div>
                <div className="text-gray-400 hover:text-pink-400 cursor-pointer transition-colors">Contact</div>
                <div className="text-gray-400 hover:text-pink-400 cursor-pointer transition-colors">Privacy</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white border-opacity-10 mt-8 pt-8 text-center text-gray-400">
            © 2025 ReferralHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;