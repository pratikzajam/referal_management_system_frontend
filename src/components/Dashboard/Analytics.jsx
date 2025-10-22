import React from 'react';
import { BarChart3 } from 'lucide-react';

const Analytics = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
      <BarChart3 className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Analytics</h2>
      <p className="text-gray-500">Track your referral performance and insights</p>
    </div>
  );
};

export default Analytics;