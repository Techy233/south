import React from 'react';
// import TicketTable from '../components/tickets/TicketTable'; // To be created

// Sample ticket data
const sampleTickets = [
  { id: 'TICK-001', subject: 'Printer not working', requester: 'Alice Wonderland', assignee: 'Bob The Builder', status: 'Open', priority: 'High', createdDate: '2024-06-28' },
  { id: 'TICK-002', subject: 'Cannot access shared drive', requester: 'Charlie Brown', assignee: 'Support Team', status: 'In Progress', priority: 'Medium', createdDate: '2024-06-27' },
  { id: 'TICK-003', subject: 'Software license expired', requester: 'Diana Prince', assignee: 'Admin User', status: 'Resolved', priority: 'Low', createdDate: '2024-06-25' },
  { id: 'TICK-004', subject: 'VPN connection issues', requester: 'Edward Scissorhands', assignee: 'Network Ops', status: 'Open', priority: 'Urgent', createdDate: '2024-06-29' },
];

const TicketListPage: React.FC = () => {
  // TODO: Fetch tickets from API
  const tickets = sampleTickets;

  return (
    <div className="p-6 sm:p-8 bg-slate-900 min-h-screen text-slate-100">
      <header className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-sky-400">Ticket Queue</h1>
          <p className="text-slate-400 text-lg">Manage and track all service requests.</p>
        </div>
        <button className="mt-4 sm:mt-0 px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg text-sm transition-colors duration-150">
          + Create New Ticket
        </button>
      </header>

      {/* Filters and Search Placeholder */}
      <div className="mb-6 p-4 bg-slate-800/50 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <input type="text" placeholder="Search by ID or subject..." className="input-style" />
          <select className="input-style">
            <option value="">All Statuses</option>
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
          <select className="input-style">
            <option value="">All Priorities</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
          </select>
          <button className="bg-slate-700 hover:bg-slate-600 text-sky-300 font-medium py-2 px-4 rounded-lg transition-colors">
            Apply Filters
          </button>
        </div>
      </div>

      {/* Ticket Table - Basic implementation for now */}
      {/* Replace with <TicketTable tickets={tickets} /> later */}
      <div className="overflow-x-auto bg-slate-800/70 backdrop-blur-md shadow-2xl rounded-xl">
        <table className="min-w-full text-sm text-left text-slate-300">
          <thead className="text-xs text-sky-300 uppercase bg-slate-700/50">
            <tr>
              <th scope="col" className="px-6 py-3">Ticket ID</th>
              <th scope="col" className="px-6 py-3">Subject</th>
              <th scope="col" className="px-6 py-3">Requester</th>
              <th scope="col" className="px-6 py-3">Assignee</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Priority</th>
              <th scope="col" className="px-6 py-3">Created</th>
              <th scope="col" className="px-6 py-3"><span className="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id} className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors">
                <td className="px-6 py-4 font-medium text-sky-400 whitespace-nowrap">{ticket.id}</td>
                <td className="px-6 py-4 max-w-xs truncate" title={ticket.subject}>{ticket.subject}</td>
                <td className="px-6 py-4">{ticket.requester}</td>
                <td className="px-6 py-4">{ticket.assignee}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    ticket.status === 'Open' ? 'bg-red-500/30 text-red-300' :
                    ticket.status === 'In Progress' ? 'bg-yellow-500/30 text-yellow-300' :
                    'bg-green-500/30 text-green-300'
                  }`}>
                    {ticket.status}
                  </span>
                </td>
                <td className="px-6 py-4">{ticket.priority}</td>
                <td className="px-6 py-4">{ticket.createdDate}</td>
                <td className="px-6 py-4 text-right">
                  <a href="#" className="font-medium text-sky-400 hover:underline">View</a>
                </td>
              </tr>
            ))}
            {tickets.length === 0 && (
              <tr>
                <td colSpan={8} className="px-6 py-12 text-center text-slate-400">No tickets found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Pagination Placeholder */}
      <div className="mt-6 flex justify-center">
        <nav aria-label="Page navigation">
          <ul className="inline-flex items-center -space-x-px">
            <li><a href="#" className="pagination-link rounded-l-lg">Previous</a></li>
            <li><a href="#" className="pagination-link active">1</a></li>
            <li><a href="#" className="pagination-link">2</a></li>
            <li><a href="#" className="pagination-link rounded-r-lg">Next</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

// Helper style for inputs/selects in this page, can be centralized later
const inputStyle = "bg-slate-700/50 border border-slate-600 text-slate-200 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 placeholder-slate-400";
const paginationLink = "px-3 py-2 leading-tight text-slate-400 bg-slate-700 border border-slate-600 hover:bg-slate-600 hover:text-sky-300";
const activePaginationLink = "px-3 py-2 text-sky-300 bg-sky-600 border border-sky-500 hover:bg-sky-700"; // This needs to be applied conditionally

export default TicketListPage;
