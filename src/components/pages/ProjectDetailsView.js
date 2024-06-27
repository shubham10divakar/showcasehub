import React from 'react';
import { Container, Card, CardContent, Typography, Avatar } from '@mui/material';
import './ProjectDetailsView.css';

const projectData = {
    title: 'My Project Title',
    description: 'This is a detailed description of my project. It includes the objectives, scope, and important information.',
    owner: 'Your Name',
    startDate: '2023-01-01',
    endDate: '2023-12-31',
    skills: ['React', 'JavaScript', 'CSS', 'Material-UI'],
    links: {
      youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      github: 'https://github.com/your-username/your-project-repo',
    },
  };
  
  const ProjectDetailsView = () => {
    return (
      <Container>
        <Card className="project-container">
          <CardContent>
            <Typography className="project-title">
              {projectData.title}
            </Typography>
            <Typography className="project-description">
              {projectData.description}
            </Typography>
            <Typography className="project-owner">
              <strong>Project Owner:</strong> {projectData.owner}
            </Typography>
            <Typography className="project-dates">
              <strong>Start Date:</strong> {projectData.startDate}
            </Typography>
            <Typography className="project-dates">
              <strong>End Date:</strong> {projectData.endDate}
            </Typography>
            <Typography className="project-skills">
              <strong>Skills Utilized:</strong>
            </Typography>
            <ul className="skill-list">
              {projectData.skills.map((skill, index) => (
                <li key={index} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
            <Card variant="outlined" className="avatar-container">
              <CardContent>
                <Avatar sx={{ bgcolor: 'primary.main', marginBottom: 2 }}>
                  {projectData.owner.charAt(0)}
                </Avatar>
                <Typography variant="h6">{projectData.owner}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Sole Contributor
                </Typography>
              </CardContent>
            </Card>
            <div className="links-section">
              <Typography variant="h6">Links:</Typography>
              <ul className="skill-list">
                <li>
                  <a
                    href={projectData.links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-item"
                  >
                    YouTube Video
                  </a>
                </li>
                <li>
                  <a
                    href={projectData.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-item"
                  >
                    GitHub Repository
                  </a>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </Container>
    );
  };

export default ProjectDetailsView;
