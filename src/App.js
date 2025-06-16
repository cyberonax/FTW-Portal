import React from 'react';
import Layout from './components/Layout';
import Card   from './components/Card';

export default function App() {
  return (
    <Layout>
      <Card title="Welcome">
        <p>Welcome to the FTW Alliance Membership Dashboard!</p>
      </Card>
      {/* continue using <Card> and <Layout> as you did before */}
    </Layout>
  );
}
