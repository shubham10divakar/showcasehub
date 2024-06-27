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
};

const ProjectDetailsView = () => {
  return (
    <Container>
      <Card className="project-container">
        <CardContent>
          <Typography variant="h4" className="project-title">
            {projectData.title}
          </Typography>
          <Typography className="project-description">
            {projectData.description}
          </Typography>
          <Typography variant="h6" className="project-owner">
            Project Owner: {projectData.owner}
          </Typography>
          <Typography className="project-dates" color="textSecondary">
            Start Date: {projectData.startDate}
          </Typography>
          <Typography className="project-dates" color="textSecondary">
            End Date: {projectData.endDate}
          </Typography>
          <Typography variant="h6" className="project-skills">
            Skills Utilized:
          </Typography>
          <ul className="skill-list">
            {projectData.skills.map((skill, index) => (
              <li key={index} className="skill-item">
                <Typography>{skill}</Typography>
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
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProjectDetailsView;
