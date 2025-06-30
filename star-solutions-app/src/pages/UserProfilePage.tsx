import React, { useState } from 'react';

// Sample user data (replace with API call)
const sampleUser = {
  name: 'Carol Danvers',
  email: 'carol.danvers@example.com',
  department: 'Flight Operations',
  role: 'User', // Could be 'Agent', 'Admin'
  phone: '555-123-4567',
  avatarUrl: 'https://via.placeholder.com/150/0ea5e9/ffffff?Text=CD', // Placeholder avatar
};

const UserProfilePage: React.FC = () => {
  // TODO: Fetch user data from API
  const [user, setUser] = useState(sampleUser);
  const [isEditing, setIsEditing] = useState(false);

  // Form state for editing
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const handleEditToggle = () => {
    if (isEditing) {
      // If was editing, reset form fields to current user state
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
    }
    setIsEditing(!isEditing);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual profile update logic (API call)
    const updatedUser = { ...user, name, email, phone };
    setUser(updatedUser); // Optimistically update UI
    console.log('Updating profile:', updatedUser);
    alert('Profile update simulated.');
    setIsEditing(false);
  };

  return (
    <div className="p-6 sm:p-8 bg-slate-900 min-h-screen text-slate-100">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-sky-400">User Profile</h1>
        <p className="text-slate-400 text-lg">Manage your account details.</p>
      </header>

      <div className="bg-slate-800/70 backdrop-blur-md shadow-2xl rounded-xl p-6 sm:p-8 max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center mb-8">
          <img
            src={user.avatarUrl}
            alt={`${user.name}'s avatar`}
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mr-0 sm:mr-6 mb-4 sm:mb-0 border-4 border-sky-500 shadow-lg"
          />
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-sky-300">{user.name}</h2>
            <p className="text-slate-400">{user.role} - {user.department}</p>
          </div>
        </div>

        {!isEditing ? (
          <div className="space-y-4">
            <InfoRow label="Full Name" value={user.name} />
            <InfoRow label="Email Address" value={user.email} />
            <InfoRow label="Phone Number" value={user.phone || 'Not provided'} />
            <InfoRow label="Department" value={user.department} />
            <InfoRow label="Role" value={user.role} />
            <button
              onClick={handleEditToggle}
              className="mt-6 w-full sm:w-auto px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-150"
            >
              Edit Profile
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sky-300 text-sm font-bold mb-1">Full Name</label>
              <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="input-style" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sky-300 text-sm font-bold mb-1">Email Address</label>
              <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="input-style" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sky-300 text-sm font-bold mb-1">Phone Number</label>
              <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} className="input-style" />
            </div>
            {/* Department and Role are usually not user-editable, so they are not in the form */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-150"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={handleEditToggle}
                className="w-full sm:w-auto px-6 py-3 bg-slate-600 hover:bg-slate-500 text-sky-200 font-bold rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-150"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

const InfoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="py-2 border-b border-slate-700/50">
    <p className="text-sm text-slate-400 font-medium">{label}</p>
    <p className="text-slate-200 text-lg">{value}</p>
  </div>
);

// Helper style for inputs in this page
const inputStyle = "shadow-inner appearance-none border border-slate-700 rounded-lg w-full py-3 px-4 bg-slate-700/50 text-slate-200 leading-tight focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent placeholder-slate-500";

export default UserProfilePage;
