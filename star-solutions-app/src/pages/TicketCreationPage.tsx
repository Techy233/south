import React, { useState } from 'react';

// Placeholder for a more complex form component if needed
// import TicketForm from '../components/tickets/TicketForm';

const TicketCreationPage: React.FC = () => {
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('medium');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  // const [attachments, setAttachments] = useState<File[]>([]); // For file uploads

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual ticket creation logic (API call)
    console.log('Creating ticket:', { category, priority, subject, description });
    alert('Ticket creation simulated. Check console for details.');
    // Reset form or redirect
  };

  return (
    <div className="p-6 sm:p-8 bg-slate-900 min-h-screen text-slate-100">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-sky-400">Create New Ticket</h1>
        <p className="text-slate-400 text-lg">Submit a new service request.</p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="bg-slate-800/70 backdrop-blur-md shadow-2xl rounded-xl p-6 sm:p-8"
      >
        {/* Category */}
        <div className="mb-6">
          <label htmlFor="category" className="block text-sky-300 text-sm font-bold mb-2">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="shadow-inner appearance-none border border-slate-700 rounded-lg w-full py-3 px-4 bg-slate-700/50 text-slate-200 leading-tight focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            required
          >
            <option value="" disabled>Select a category...</option>
            <option value="hardware">Hardware Issue</option>
            <option value="software">Software Problem</option>
            <option value="network">Network Access</option>
            <option value="account">Account Assistance</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Priority */}
        <div className="mb-6">
          <label htmlFor="priority" className="block text-sky-300 text-sm font-bold mb-2">
            Priority
          </label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="shadow-inner appearance-none border border-slate-700 rounded-lg w-full py-3 px-4 bg-slate-700/50 text-slate-200 leading-tight focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>

        {/* Subject */}
        <div className="mb-6">
          <label htmlFor="subject" className="block text-sky-300 text-sm font-bold mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="e.g., Cannot connect to printer"
            className="shadow-inner appearance-none border border-slate-700 rounded-lg w-full py-3 px-4 bg-slate-700/50 text-slate-200 leading-tight focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent placeholder-slate-500"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-8">
          <label htmlFor="description" className="block text-sky-300 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
            placeholder="Please provide as much detail as possible..."
            className="shadow-inner appearance-none border border-slate-700 rounded-lg w-full py-3 px-4 bg-slate-700/50 text-slate-200 leading-tight focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent placeholder-slate-500"
            required
          />
        </div>

        {/* Attachments - Placeholder for now */}
        {/* <div className="mb-8">
          <label htmlFor="attachments" className="block text-sky-300 text-sm font-bold mb-2">
            Attachments (Optional)
          </label>
          <input
            type="file"
            id="attachments"
            multiple
            // onChange={(e) => setAttachments(Array.from(e.target.files || []))}
            className="block w-full text-sm text-slate-400
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:text-sm file:font-semibold
              file:bg-sky-600 file:text-sky-50
              hover:file:bg-sky-700
              cursor-pointer"
          />
        </div> */}

        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-150"
          >
            Submit Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

export default TicketCreationPage;
