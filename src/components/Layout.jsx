import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-darkBg text-white flex flex-col">
      {/* Header */}
      <header className="bg-panelBg px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">FTW Portal</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:text-accent">Dashboard</a>
          <a href="#" className="hover:text-accent">Portfolio</a>
          <a href="#" className="hover:text-accent">Settings</a>
        </nav>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (or you can collapse on mobile) */}
        <aside className="w-64 bg-panelBg p-4 space-y-6">
          <div className="text-sm uppercase text-gray-400">Portfolio Value</div>
          <div className="text-3xl font-semibold">$12,345.67</div>
          {/* Add links or stats here */}
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
