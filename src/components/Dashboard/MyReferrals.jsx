// MyReferrals.jsx
import React from 'react';
import { FileText } from 'lucide-react';

const MyReferrals = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
      <FileText className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-gray-900 mb-2">My Referrals</h2>
      <p className="text-gray-500">View and manage all your referrals in one place</p>
    </div>
  );
};

export default MyReferrals;