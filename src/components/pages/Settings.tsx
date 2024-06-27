import React from "react";

const Settings: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <p>
        This is the Settings page. You can put your settings-related content
        here.
      </p>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">User Settings</h2>
        <p>Manage your user preferences and account settings.</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">App Settings</h2>
        <p>Configure application-specific settings and preferences.</p>
      </div>
    </div>
  );
};

export default Settings;
