import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-navy text-textPrimary font-sans">
      <header className="bg-navyDark px-6 py-4 flex justify-between items-center shadow-panel rounded-lg">
        <h1 className="text-2xl font-semibold">FTW Portal</h1>
      </header>
      <main className="p-6">
        <p className="text-lg">Welcome to the FTW Alliance Membership Dashboard!</p>
        {/* Add your cards & tables here */}
      </main>
    </div>
  );
}
