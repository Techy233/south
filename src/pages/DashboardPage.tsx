import React from 'react';

const DashboardPage: React.FC = () => {
  // Placeholder metrics
  const metrics = [
    { label: 'Open Tickets', value: 25, color: 'text-red-400' },
    { label: 'Pending Approval', value: 5, color: 'text-yellow-400' },
    { label: 'Resolved Today', value: 12, color: 'text-green-400' },
    { label: 'Overdue Tickets', value: 3, color: 'text-orange-400' },
  ];

  return (
    <div className="p-6 sm:p-8 bg-slate-900 min-h-screen text-slate-100">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-sky-400">Dashboard</h1>
        <p className="text-slate-400 text-lg">Overview of IT Support Activities</p>
      </header>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="bg-slate-800/70 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-sky-500/30 transition-shadow duration-300"
          >
            <h2 className={`text-4xl sm:text-5xl font-bold ${metric.color} mb-1`}>
              {metric.value}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">{metric.label}</p>
          </div>
        ))}
      </div>

      {/* Placeholder for recent activity or important tickets */}
      <div className="bg-slate-800/70 backdrop-blur-md p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-sky-400 mb-4">Recent Activity</h2>
        <ul className="space-y-3">
          {['New ticket #1234 created', 'Ticket #1230 resolved', 'Comment added to #1232'].map((activity, index) => (
            <li key={index} className="text-slate-300 text-sm p-3 bg-slate-700/50 rounded-md hover:bg-slate-700 transition-colors">
              {activity}
            </li>
          ))}
        </ul>
         <button className="mt-6 px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg text-sm transition-colors duration-150">
          View All Tickets
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
