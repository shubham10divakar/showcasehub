import React from 'react';
import './ProjectDetailsView.css';
import { Container, Card, CardContent, Typography, Avatar, Button } from '@mui/material';
//import { useTheme } from './CustomThemeProvider';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

const projectData = {
    title: 'My Project Title',
    description: 'This is a detailed description of my project. It includes the objectives, scope, and important information.',
    owner: 'Your Name',
    startDate: '2023-01-01',
    endDate: '2023-12-31',
    skills: ['React', 'JavaScript', 'CSS', 'Material-UI'],
    links: {
      youtube: 'https://www.youtube.com/watch?v=GkFWvz0an48',
      github: 'https://github.com/example/project',
    },
  };
  
  const ProjectDetailsView = () => {
    //const { isDark, toggleTheme } = useTheme();
  
    // Function to extract YouTube video ID from URL
    const getYouTubeVideoId = (url) => {
      const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
      return match && match[1];
    };
  
    const youtubeId = getYouTubeVideoId(projectData.links.youtube);
  
    return (
      <Container>
        {/* <Button onClick={toggleTheme}>
          Switch to {isDark ? 'Light' : 'Dark'} Theme
        </Button> */}
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
            <div className="links-section">
              <Typography variant="h6">
                <strong>Links:</strong>
              </Typography>
              <a href={projectData.links.youtube} className="link-item" target="_blank" rel="noopener noreferrer">
                <YouTubeIcon className="link-icon" />
                YouTube Video
              </a>
              <a href={projectData.links.github} className="link-item" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="link-icon" />
                GitHub Repository
              </a>
            </div>
            <div className="video-container">
              <img
                src={`https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`}
                alt="YouTube Video Thumbnail"
                className="video-thumbnail"
              />
              <Typography className="video-description">
                Watch a video overview of the project on YouTube.
              </Typography>
            </div>
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
