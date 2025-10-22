import React from 'react';
import { Award } from 'lucide-react';

const Rewards = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
      <Award className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Rewards</h2>
      <p className="text-gray-500">View your earned rewards and bonuses</p>
    </div>
  );
};

export default Rewards;