import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-navy text-textPrimary flex flex-col">
      <header className="bg-navyDark px-6 py-4 flex justify-between items-center shadow-panel rounded-lg">
        <h1 className="text-2xl font-semibold">FTW Portal</h1>
        <nav className="space-x-4 text-textSecondary">
          <a href="#" className="hover:text-primary">Dashboard</a>
          <a href="#" className="hover:text-primary">Portfolio</a>
          <a href="#" className="hover:text-primary">Settings</a>
        </nav>
      </header>
      <div className="flex flex-1 overflow-hidden mt-6">
        <aside className="w-64 bg-navyDark p-4 space-y-6 shadow-panel rounded-lg">
          {/* Sidebar content */}
        </aside>
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
