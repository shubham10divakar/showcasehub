import React from 'react';
import './ProjectDetailsView.css';
import { Container, Card, CardContent, Typography, Avatar, Button } from '@mui/material';
//import { useTheme } from './CustomThemeProvider';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import Font Awesome
import { faPython, faJs, faHtml5, faCss3Alt, faReact } from '@fortawesome/free-brands-svg-icons'; // Import specific icons
// Import the Python logo image (adjust path as needed)
import pythonLogo from '../../images/python-logo.png';
import { useParams } from 'react-router-dom';
import projectDataList from './ListOfProjects';

// const projectData = {
//     title: 'My Project Title',
//     description: 'This is a detailed description of my project. It includes the objectives, scope, and important information.',
//     owner: 'Your Name',
//     startDate: '2023-01-01',
//     endDate: '2023-12-31',
//     skills: ['React', 'JavaScript', 'CSS', 'Material-UI', 'Python'],
//     links: {
//       youtube: 'https://www.youtube.com/watch?v=GkFWvz0an48', // Replace with your actual YouTube video URL
//       github: 'https://github.com/example/project', // Replace with your actual GitHub repository URL
//     },
//     installation: 'You can install this project using pip. Run the following command:\n\n```pip install your-package```',
//     usageExamples: [
//       {
//         title: 'Example 1',
//         description: 'Description of example 1 usage.',
//         code: 'Your usage code snippet for example 1',
//       },
//       {
//         title: 'Example 2',
//         description: 'Description of example 2 usage.',
//         code: 'Your usage code snippet for example 2',
//       },
//     ],
//     features: [
//       'Feature 1',
//       'Feature 2',
//       'Feature 3',
//     ],
//     contributing: 'Thank you for considering contributing to our project! Please read our [Contributing Guidelines](link-to-contributing-docs) for details on how to get started.',
//     communityLinks: {
//       forum: 'Link to community forum or mailing list',
//       support: 'Link to support channel or FAQ page',
//     },
//     acknowledgments: 'We acknowledge the contributions of individuals or organizations that have helped make this project possible.',
//     screenshots: [
//       'URL to screenshot or demo GIF 1',
//       'URL to screenshot or demo GIF 2',
//     ],
//   };
  
  const ProjectDetailsView = () => {
    //const { isDark, toggleTheme } = useTheme();

    const { id } = useParams();
    console.log(id);
    //console.log(projectDataList[1])
    console.log(projectDataList[id-1])
    const projectData = projectDataList[id-1]
    // Function to extract YouTube video ID from URL
    const getYouTubeVideoId = (url) => {
      const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
      return match && match[1];
    };

    // Function to map programming languages to their respective icons
  const getLanguageIcon = (language) => {
    switch (language.toLowerCase()) {
      case 'python':
        return <FontAwesomeIcon icon={faPython} />;
      case 'javascript':
        return <FontAwesomeIcon icon={faJs} />;
      case 'html':
        return <FontAwesomeIcon icon={faHtml5} />;
      case 'css':
        return <FontAwesomeIcon icon={faCss3Alt} />;
      case 'react':
        return <FontAwesomeIcon icon={faReact} />;
      // Add more cases for other languages as needed
      default:
        return null;
    }
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
            <div className="section">
              <Typography variant="h6">
                <strong>Check below video for what? why? and How? to use the tool:</strong>
              </Typography>
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="embedded-video"
                ></iframe>
              </div>
            </div>
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
            <div className="section">
            <Typography variant="h6">
              <strong>Languages:</strong>
            </Typography>
            <div className="language-icons">
              {projectData.skills.map((language, index) => (
                <div key={index} className="language-icon">
                  {getLanguageIcon(language)}
                  <Typography variant="caption">{language}</Typography>
                </div>
                ))}
                </div>
            </div>
            <div className="section">
              <Typography variant="h6">
                <strong>Installation Instructions:</strong>
              </Typography>
              <Typography>
                <pre>{projectData.installation}</pre>
              </Typography>
            </div>
            <div className="section">
              <Typography variant="h6">
                <strong>Usage Examples:</strong>
              </Typography>
              {projectData.usageExamples.map((example, index) => (
                <div key={index}>
                  <Typography variant="subtitle1">
                    {example.title}
                  </Typography>
                  <Typography>
                    {example.description}
                  </Typography>
                  <Typography>
                    <pre>{example.code}</pre>
                  </Typography>
                </div>
              ))}
            </div>
            <div className="section">
              <Typography variant="h6">
                <strong>Features Overview:</strong>
              </Typography>
              <ul>
                {projectData.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="section">
              <Typography variant="h6">
                <strong>Contributing Guidelines:</strong>
              </Typography>
              <Typography>
                {projectData.contributing}
              </Typography>
            </div>
            <div className="section">
              <Typography variant="h6">
                <strong>Community and Support:</strong>
              </Typography>
              <Typography>
                Forum: <a href={projectData.communityLinks.forum} target="_blank" rel="noopener noreferrer">{projectData.communityLinks.forum}</a>
              </Typography>
              <Typography>
                Support: <a href={projectData.communityLinks.support} target="_blank" rel="noopener noreferrer">{projectData.communityLinks.support}</a>
              </Typography>
            </div>
            <div className="section">
              <Typography variant="h6">
                <strong>Acknowledgments:</strong>
              </Typography>
              <Typography>
                {projectData.acknowledgments}
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
