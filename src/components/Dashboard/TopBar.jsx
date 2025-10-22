import React, { useState } from 'react';
import { Menu, Bell, Plus } from 'lucide-react';
import { useAuth } from '../../Context/AuthContext';
import AddReferralModal from '../../Modals/AddReferralModal';

const TopBar = ({ setSidebarOpen, activeTab }) => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useAuth();

  const getTitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Dashboard';
      case 'referrals': return 'My Referrals';
      case 'analytics': return 'Analytics';
      case 'rewards': return 'Rewards';
      default: return 'Dashboard';
    }
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
                <Menu className="w-6 h-6 text-gray-500" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{getTitle()}</h1>
                <p className="text-sm text-gray-500">{`Welcome back, ${user?.name || 'User'}!`}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button 
                onClick={() => setShowModal(true)}
                className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Plus className="w-5 h-5" />
                <span className="font-semibold hidden sm:inline">New Referral</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <AddReferralModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </>
  );
};

export default TopBar;