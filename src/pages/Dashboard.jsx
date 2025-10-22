import React, { useState } from 'react';
import { Users, TrendingUp, Award, Clock } from 'lucide-react';
import Sidebar from '../components/Dashboard/Sidebar';
import TopBar from '../components/Dashboard/TopBar';
import StatsCard from '../components/Dashboard/StatsCard';
import SearchFilter from '../components/Dashboard/SearchFilter';
import CandidateCard from '../components/Dashboard/CandidateCard';
import ActivityFeed from '../components/Dashboard/ActivityFeed';
import PerformanceMetrics from '../components/Dashboard/PerfromanceMertics';
import MyReferrals from '../components/Dashboard/MyReferrals';
import Analytics from '../components/Dashboard/Analytics';
import Rewards from '../components/Dashboard/Rewards';
import { useCandidate } from '../Context/CandidateContext'

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [activeTab, setActiveTab] = useState('dashboard');

  const { metrics, deleteCandidate } = useCandidate();

  // let totalCandidates = metrics.data.totalCandidates;
let candidates = metrics?.data?.candidates || [];





  const stats = {
    total: candidates.length,
    pending: candidates.filter(c => c.status === 'Pending').length,
    reviewed: candidates.filter(c => c.status === 'Reviewed').length,
    hired: candidates.filter(c => c.status === 'Hired').length
  };

  const recentActivity = [
    { id: 1, action: 'New referral submitted', candidate: 'Sarah Johnson', time: '2 hours ago' },
    { id: 2, action: 'Status updated to Reviewed', candidate: 'Mike Chen', time: '5 hours ago' },
    { id: 3, action: 'Candidate hired', candidate: 'Emily Davis', time: '1 day ago' },
  ];

  const filteredCandidates = (() => {
    const q = (searchTerm || '').trim().toLowerCase();
    return candidates.filter(candidate => {
      const name = String(candidate.name || '').toLowerCase();
      const job = String(candidate.jobTitle || candidate.job || '').toLowerCase();
      const status = String(candidate.status || '').toLowerCase();
 
      const matchesSearch = q === '' || name.includes(q) || job.includes(q) || status.includes(q);
      const matchesFilter = filterStatus === 'All' || filterStatus === '' || candidate.status === filterStatus;
      return matchesSearch && matchesFilter;
    });
  })();

  const statsConfig = [
    {
      title: 'Total Referrals',
      value: stats.total,
      // subtitle: '+2 this week',
      icon: Users,
      bgColor: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      textColor: 'text-gray-900'
    },
    {
      title: 'Pending',
      value: stats.pending,
      // subtitle: 'Awaiting review',
      icon: Clock,
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      textColor: 'text-yellow-600'
    },
    {
      title: 'Reviewed',
      value: stats.reviewed,
      // subtitle: 'In progress',
      icon: TrendingUp,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      textColor: 'text-blue-600'
    },
    {
      title: 'Hired',
      value: stats.hired,
      // subtitle: '$500 earned',
      icon: Award,
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      textColor: 'text-green-600'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="lg:ml-64">
        <TopBar setSidebarOpen={setSidebarOpen} activeTab={activeTab} />

        <main className="p-4 sm:p-6 lg:p-8">
          {activeTab === 'dashboard' && (
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {statsConfig.map((stat, index) => (
                  <StatsCard key={index} {...stat} />
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Candidates List */}
                <div className="lg:col-span-2 space-y-6">
                  <SearchFilter
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    filterStatus={filterStatus}
                    setFilterStatus={setFilterStatus}
                  />

                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-gray-900">Recent Referrals</h2>
                    {filteredCandidates.length > 0 ? (
                      filteredCandidates.map(candidate => (
                        <CandidateCard key={candidate.id} candidate={candidate} />
                      ))
                    ) : (
                      <p className="text-sm text-gray-500">No referrals found.</p>
                    )}
                  </div>
                </div>

                {/* Right Sidebar */}
                <div className="space-y-6">
                  <ActivityFeed activities={recentActivity} />

                  <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-sm p-6 text-white">
                    <h3 className="text-lg font-bold mb-2">Refer & Earn</h3>
                    <p className="text-sm text-indigo-100 mb-4">
                      Earn up to $1000 for each successful referral!
                    </p>
                    <button className="w-full bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                      Learn More
                    </button>
                  </div>

                  <PerformanceMetrics />
                </div>
              </div>
            </>
          )}

          {activeTab === 'referrals' && <MyReferrals />}
          {activeTab === 'analytics' && <Analytics />}
          {activeTab === 'rewards' && <Rewards />}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Dashboard;