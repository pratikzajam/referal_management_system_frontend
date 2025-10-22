import React from 'react';
import { useCandidate } from '../../Context/CandidateContext';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const ActivityFeed = () => {
  const { metrics } = useCandidate();

  const candidates = metrics?.data?.candidates || [];

  if (candidates.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
        <p className="text-sm text-gray-500">No recent activity available.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {candidates.map((metric) => (
          <div
            key={metric._id || metric.id}
            className="flex items-start space-x-3 pb-4 border-b border-gray-200 last:border-0 last:pb-0"
          >
            <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                New Referal Has Been Added
              </p>
              <p className="text-sm text-gray-600">{metric.candidateName}</p>
              <p className="text-xs text-gray-400 mt-1">
                {metric.updatedAt
                  ? dayjs(metric.updatedAt).fromNow() 
                  : 'Recently'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
