// src/App.jsx
import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-darkBg text-white flex flex-col">
      {/* Header */}
      <header className="p-4 bg-panelBg flex justify-between items-center">
        <h1 className="text-2xl font-bold">FTW Portal</h1>
      </header>

      {/* Body */}
      <div className="flex-1 p-6 overflow-auto">
        <p className="text-lg">Welcome to the FTW Alliance Membership Dashboard!</p>

        {/* Here’s where you can start adding your grid of cards: */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Price Chart */}
          <div className="bg-panelBg rounded-lg shadow p-4">
            <h2 className="text-xl mb-2">BTC/USDT Price Chart</h2>
            <div className="h-64 bg-gray-800 rounded" />
          </div>

          {/* Card 2: Live Ticker (span two columns on lg) */}
          <div className="lg:col-span-2 bg-panelBg rounded-lg shadow p-4">
            <h2 className="text-xl mb-2">Live Price Ticker</h2>
            <div className="h-12 bg-gray-800 rounded" />
          </div>
        </div>

        {/* Orders Table below */}
        <div className="mt-8 bg-panelBg rounded-lg shadow p-4">
          <h2 className="text-xl mb-2">Recent Orders</h2>
          <table className="w-full text-sm">
            <thead className="text-left text-gray-400">
              <tr><th>Date</th><th>Symbol</th><th>Side</th><th>Price</th><th>Amount</th></tr>
            </thead>
            <tbody>
              <tr><td>06/01</td><td>BTC/USDT</td><td>Buy</td><td>60,000</td><td>0.01</td></tr>
              <tr><td>06/02</td><td>ETH/USDT</td><td>Sell</td><td>4,200</td><td>0.2</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
