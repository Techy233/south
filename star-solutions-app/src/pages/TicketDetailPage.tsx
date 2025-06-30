import React from 'react';
// import { useParams } from 'react-router-dom'; // To get ticket ID from URL

// Sample ticket data (replace with API call based on ID)
const sampleTicket = {
  id: 'TICK-004',
  subject: 'VPN connection issues intermittently dropping, unable to access critical internal resources for prolonged periods.',
  requester: 'Edward Scissorhands (edward.s@example.com)',
  assignee: 'Network Operations Team',
  status: 'Open',
  priority: 'Urgent',
  category: 'Network',
  createdDate: '2024-06-29 10:30 AM',
  lastUpdated: '2024-06-30 09:15 AM',
  description: `Users are experiencing intermittent VPN connection drops. This started occurring yesterday afternoon and has persisted.
When the connection drops, access to all internal file shares and applications is lost.
Reconnecting sometimes works, but the connection is unstable. This is affecting multiple users in the marketing department.
We have tried restarting modems and VPN clients with no consistent success. Attached are logs from one of the affected machines.`,
  comments: [
    { user: 'Support Agent (Alex)', text: 'Received the ticket. Investigating VPN server logs.', timestamp: '2024-06-29 11:00 AM' },
    { user: 'Edward Scissorhands', text: 'Thanks for looking into it. The issue is still ongoing.', timestamp: '2024-06-29 02:30 PM' },
    { user: 'Support Agent (Alex)', text: 'Identified a potential configuration mismatch on one of the VPN concentrators. Applying a fix now.', timestamp: '2024-06-30 09:00 AM' },
  ],
  attachments: [
    { name: 'vpn_client_log_userX.txt', size: '1.2MB', url: '#' },
    { name: 'screenshot_error_msg.png', size: '350KB', url: '#' },
  ]
};

const TicketDetailPage: React.FC = () => {
  // const { ticketId } = useParams<{ ticketId: string }>(); // Example: Get ticketId from URL
  // TODO: Fetch ticket data based on ticketId
  const ticket = sampleTicket; // Using sample data for now

  if (!ticket) {
    return <div className="p-8 text-slate-300">Loading ticket details or ticket not found...</div>;
  }

  const getStatusColor = (status: string) => {
    if (status === 'Open') return 'bg-red-500/30 text-red-300';
    if (status === 'In Progress') return 'bg-yellow-500/30 text-yellow-300';
    if (status === 'Resolved') return 'bg-green-500/30 text-green-300';
    return 'bg-slate-500/30 text-slate-300';
  };

  const getPriorityColor = (priority: string) => {
    if (priority === 'Urgent') return 'border-red-500 text-red-400';
    if (priority === 'High') return 'border-orange-500 text-orange-400';
    if (priority === 'Medium') return 'border-yellow-500 text-yellow-400';
    return 'border-sky-500 text-sky-400';
  };


  return (
    <div className="p-6 sm:p-8 bg-slate-900 min-h-screen text-slate-100">
      <header className="mb-8">
        <div className="flex justify-between items-start">
            <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-sky-400 break-all">Ticket Details: {ticket.id}</h1>
                <p className={`mt-1 text-sm font-semibold px-2 py-0.5 inline-block rounded-full border ${getPriorityColor(ticket.priority)}`}>{ticket.priority} Priority</p>
            </div>
            <span className={`mt-1 px-3 py-1.5 text-sm font-semibold rounded-lg ${getStatusColor(ticket.status)}`}>
                {ticket.status}
            </span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Ticket Info */}
        <div className="lg:col-span-2 bg-slate-800/70 backdrop-blur-md shadow-2xl rounded-xl p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-sky-300 mb-1">{ticket.subject}</h2>

          <div className="mt-6 mb-6 prose prose-sm sm:prose-base prose-invert max-w-none text-slate-300 leading-relaxed whitespace-pre-wrap">
            <p>{ticket.description}</p>
          </div>

          {/* Attachments */}
          {ticket.attachments && ticket.attachments.length > 0 && (
            <div className="mt-6 pt-6 border-t border-slate-700">
              <h3 className="text-lg font-semibold text-sky-400 mb-3">Attachments</h3>
              <ul className="space-y-2">
                {ticket.attachments.map((file, index) => (
                  <li key={index} className="flex items-center justify-between p-2 bg-slate-700/50 rounded-md text-sm">
                    <a href={file.url} className="text-sky-400 hover:underline truncate" title={file.name}>
                      {/* Icon placeholder */}
                      📄 {file.name}
                    </a>
                    <span className="text-slate-400">{file.size}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Comments/History */}
          <div className="mt-8 pt-6 border-t border-slate-700">
            <h3 className="text-xl font-semibold text-sky-400 mb-4">Activity & Comments</h3>
            <div className="space-y-6">
              {ticket.comments.map((comment, index) => (
                <div key={index} className="p-4 bg-slate-700/40 rounded-lg shadow">
                  <p className="text-slate-300 mb-1">{comment.text}</p>
                  <p className="text-xs text-slate-500">
                    By <span className="font-medium text-sky-500">{comment.user}</span> on {comment.timestamp}
                  </p>
                </div>
              ))}
            </div>
            {/* Add Comment Form Placeholder */}
            <div className="mt-6">
              <textarea
                rows={3}
                placeholder="Add a comment or update..."
                className="shadow-inner appearance-none border border-slate-700 rounded-lg w-full py-3 px-4 bg-slate-700/50 text-slate-200 leading-tight focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent placeholder-slate-500"
              />
              <button className="mt-3 px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg text-sm transition-colors duration-150">
                Post Update
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar with Ticket Metadata */}
        <div className="lg:col-span-1 space-y-6">
            <div className="bg-slate-800/70 backdrop-blur-md shadow-xl rounded-xl p-6">
                <h3 className="text-lg font-semibold text-sky-400 mb-4">Ticket Information</h3>
                <dl className="space-y-3 text-sm">
                    <div><dt className="font-medium text-slate-400">Requester:</dt><dd className="text-slate-200">{ticket.requester}</dd></div>
                    <div><dt className="font-medium text-slate-400">Assignee:</dt><dd className="text-slate-200">{ticket.assignee || 'Unassigned'}</dd></div>
                    <div><dt className="font-medium text-slate-400">Category:</dt><dd className="text-slate-200">{ticket.category}</dd></div>
                    <div><dt className="font-medium text-slate-400">Created Date:</dt><dd className="text-slate-200">{ticket.createdDate}</dd></div>
                    <div><dt className="font-medium text-slate-400">Last Updated:</dt><dd className="text-slate-200">{ticket.lastUpdated}</dd></div>
                </dl>
            </div>
            <div className="bg-slate-800/70 backdrop-blur-md shadow-xl rounded-xl p-6">
                <h3 className="text-lg font-semibold text-sky-400 mb-4">Actions</h3>
                <div className="space-y-3">
                    <button className="w-full btn-secondary">Assign Ticket</button>
                    <button className="w-full btn-secondary">Change Status</button>
                    <button className="w-full btn-danger">Close Ticket</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

// Placeholder for button styles, should be centralized
// .btn-secondary: bg-slate-600 hover:bg-slate-500 text-sky-200
// .btn-danger: bg-red-600 hover:bg-red-500 text-white

export default TicketDetailPage;
