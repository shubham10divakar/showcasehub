import React from 'react';
import ProjectCards from '../ProjectCards';
import Footer from '../Footer';

export default function MyWorks() {
  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <div style={{ padding: '3rem 2rem 1rem', textAlign: 'center' }}>
        <h1 style={{ color: 'var(--text-primary)', fontSize: '2rem', fontWeight: 700, margin: 0 }}>
          My Works
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          Projects I've built and shipped
        </p>
      </div>
      <ProjectCards />
      <Footer />
    </div>
  );
}
