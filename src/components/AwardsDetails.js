// AwardDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Grid, Card, CardMedia } from '@mui/material';

const AwardDetails = ({ awards }) => {
  const { id } = useParams();
  const award = awards.find((award) => award.id === parseInt(id));

  if (!award) {
    return <Typography variant="h6">Award not found</Typography>;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Typography variant="h4" gutterBottom>
          {award.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {award.description}
        </Typography>
        <div>
          <Typography variant="h6" gutterBottom>
            Gallery
          </Typography>
          <Grid container spacing={3}>
            {award.gallery.map((image, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={image}
                    alt={`Gallery Image ${index + 1}`}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Grid>
      <Grid item xs={12} md={4}>
        {/* Additional details or related information */}
      </Grid>
    </Grid>
  );
};

export default AwardDetails;
