import React from 'react';

export default function Card({ title, children }) {
  return (
    <div className="bg-navyDark rounded-lg shadow-panel p-4 mb-6">
      <h2 className="text-xl text-textPrimary mb-3">{title}</h2>
      {children}
    </div>
  );
}
