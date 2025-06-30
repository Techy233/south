import React from 'react';

// Placeholder for different settings sections
const UserManagementSection = () => (
  <div className="setting-section">
    <h2 className="setting-section-title">User Management</h2>
    <p className="text-slate-400 mb-4">Add, remove, or modify user accounts and roles.</p>
    {/* Placeholder content */}
    <button className="btn-primary">Manage Users</button>
  </div>
);

const CategoriesPrioritiesSection = () => (
  <div className="setting-section">
    <h2 className="setting-section-title">Ticket Categories & Priorities</h2>
    <p className="text-slate-400 mb-4">Define and manage ticket classifications and urgency levels.</p>
    {/* Placeholder content */}
    <button className="btn-primary mr-4">Manage Categories</button>
    <button className="btn-primary">Manage Priorities</button>
  </div>
);

const InvoiceSettingsSection = () => (
  <div className="setting-section">
    <h2 className="setting-section-title">Invoice Configuration</h2>
    <p className="text-slate-400 mb-4">Set up invoice templates, numbering, and payment details.</p>
    {/* Placeholder content */}
    <button className="btn-primary">Configure Invoicing</button>
  </div>
);

const GeneralSettingsSection = () => (
  <div className="setting-section">
    <h2 className="setting-section-title">General Application Settings</h2>
    <p className="text-slate-400 mb-4">Configure system-wide parameters and preferences.</p>
    {/* Placeholder content */}
    <div className="space-y-2">
        <p className="text-slate-300">Notification Preferences: <button className="text-sky-400 hover:underline ml-2">Edit</button></p>
        <p className="text-slate-300">Default Language: <span className="text-white">English</span></p>
    </div>
  </div>
);


const SettingsPage: React.FC = () => {
  // TODO: Add logic for fetching and updating settings
  // This page would typically be restricted to admin users

  return (
    <div className="p-6 sm:p-8 bg-slate-900 min-h-screen text-slate-100">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-sky-400">Application Settings</h1>
        <p className="text-slate-400 text-lg">Configure and manage STAR SOLUTIONS.</p>
      </header>

      <div className="space-y-8">
        <UserManagementSection />
        <CategoriesPrioritiesSection />
        <InvoiceSettingsSection />
        <GeneralSettingsSection />
        {/* Add more sections as needed, e.g., Integrations, API Keys, Branding */}
      </div>
    </div>
  );
};

// Helper styles (can be centralized)
// .setting-section: bg-slate-800/70 backdrop-blur-md shadow-xl rounded-xl p-6
// .setting-section-title: text-2xl font-semibold text-sky-300 mb-2
// .btn-primary: px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg text-sm transition-colors

// Apply these styles through Tailwind classes directly for now
const settingSectionStyle = "bg-slate-800/70 backdrop-blur-md shadow-xl rounded-xl p-6 sm:p-8";
const settingSectionTitleStyle = "text-xl sm:text-2xl font-semibold text-sky-300 mb-3";
const btnPrimaryStyle = "px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg text-sm transition-colors duration-150";

// Re-defining components with direct Tailwind for simplicity in this file
const UserManagementSectionStyled = () => (
  <div className={settingSectionStyle}>
    <h2 className={settingSectionTitleStyle}>User Management</h2>
    <p className="text-slate-400 mb-4">Add, remove, or modify user accounts and roles.</p>
    <button className={btnPrimaryStyle}>Manage Users</button>
  </div>
);

const CategoriesPrioritiesSectionStyled = () => (
  <div className={settingSectionStyle}>
    <h2 className={settingSectionTitleStyle}>Ticket Categories & Priorities</h2>
    <p className="text-slate-400 mb-4">Define and manage ticket classifications and urgency levels.</p>
    <button className={`${btnPrimaryStyle} mr-4`}>Manage Categories</button>
    <button className={btnPrimaryStyle}>Manage Priorities</button>
  </div>
);

const InvoiceSettingsSectionStyled = () => (
  <div className={settingSectionStyle}>
    <h2 className={settingSectionTitleStyle}>Invoice Configuration</h2>
    <p className="text-slate-400 mb-4">Set up invoice templates, numbering, and payment details.</p>
    <button className={btnPrimaryStyle}>Configure Invoicing</button>
  </div>
);

const GeneralSettingsSectionStyled = () => (
  <div className={settingSectionStyle}>
    <h2 className={settingSectionTitleStyle}>General Application Settings</h2>
    <p className="text-slate-400 mb-4">Configure system-wide parameters and preferences.</p>
     <div className="space-y-3">
        <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-md">
            <p className="text-slate-300">Notification Preferences</p>
            <button className="text-xs px-3 py-1 border border-sky-600 text-sky-400 hover:bg-sky-600 hover:text-white rounded-md transition-colors">Edit</button>
        </div>
        <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-md">
            <p className="text-slate-300">Default Language</p>
            <span className="text-slate-200 font-medium">English (US)</span>
        </div>
    </div>
  </div>
);

const SettingsPageStyled: React.FC = () => {
  return (
    <div className="p-6 sm:p-8 bg-slate-900 min-h-screen text-slate-100">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-sky-400">Application Settings</h1>
        <p className="text-slate-400 text-lg mt-1">Configure and manage STAR SOLUTIONS.</p>
      </header>

      <div className="space-y-10">
        <UserManagementSectionStyled />
        <CategoriesPrioritiesSectionStyled />
        <InvoiceSettingsSectionStyled />
        <GeneralSettingsSectionStyled />
      </div>
    </div>
  );
};


export default SettingsPageStyled;
