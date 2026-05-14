import React from 'react';
import Introduction from './Introduction';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Skills from './Skills';
import ProjectList from './ProjectsInPortfolio';
import Footer from '../Footer';

export default function Portfolio() {
  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <Introduction />
      <WorkExperience />
      <Education />
      <Skills />
      <ProjectList />
      <Footer />
    </div>
  );
}
