import React, { useState } from 'react';
import { Briefcase, CheckCircle, Clock, Search } from 'lucide-react';
import { useCandidate } from '../../Context/CandidateContext';

const CandidateCard = ({ candidate }) => {

  const { metrics, deleteCandidate, updateCandidateStatus } = useCandidate();
  const [loading, setLoading] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Reviewed': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Hired': return 'bg-green-100 text-green-800 border-green-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Pending': return <Clock className="w-4 h-4" />;
      case 'Reviewed': return <Search className="w-4 h-4" />;
      case 'Hired': return <CheckCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  const handleDeleteClick = async (id) => {
    setLoading(true);
    try {

      if (confirm("Do You Really Want to Delete This Candidate?")) {
        await deleteCandidate(id);
      } else {
        return null
      }

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  let handleUpdate = async (id, status) => {
    await updateCandidateStatus(status, id);
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {candidate.candidateName[0]}
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">{candidate.candidateName}</h3>
            <p className="text-sm text-gray-500">{candidate.email}</p>
          </div>
        </div>
        <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border ${getStatusColor(candidate.status)}`}>
          {getStatusIcon(candidate.status)}
          <span className="text-xs font-semibold">{candidate.status}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-2 text-gray-600">
          <Briefcase className="w-4 h-4" />
          <span className="text-sm font-medium">{candidate.jobTitle}</span>
        </div>
        <div className="text-sm text-gray-500">
          {/* Referred: {candidate.date} */}
        </div>
      </div>

      <div className="flex space-x-2 pt-4 border-t border-gray-200">
        {/* View Resume */}
        <button
          onClick={() => window.open(candidate.resume, '_blank')}
          disabled={!candidate.resume} // 👈 disable if resume is blank
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors
    ${candidate.resume
              ? 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
        >
          View Resume
        </button>

        {/* Delete Resume with Loader */}
        <button
          onClick={() => handleDeleteClick(candidate._id)}
          className="flex-1 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 text-red-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          ) : (
            'Delete Resume'
          )}
        </button>

        {/* Update Status Dropdown */}
        <select onChange={(e) => { handleUpdate(candidate._id, e.target.value) }} className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
          <option value="">Update Status</option>
          {['Pending', 'Reviewed', 'Hired']
            .filter(status => status !== candidate.status)
            .map(status => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default CandidateCard;
