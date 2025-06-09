import React from 'react';

export default function Card({ title, children }) {
  return (
    <div className="bg-panelBg rounded-lg shadow p-4 mb-6">
      <h2 className="text-xl mb-3">{title}</h2>
      {children}
    </div>
  );
}
