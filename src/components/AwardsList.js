// AwardsList.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

const AwardsList = ({ awards }) => {
  return (
    <Grid container spacing={3}>
      {awards.map((award) => (
        <Grid item key={award.id} xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea component={Link} to={`/awards/${award.id}`}>
              <CardMedia
                component="img"
                height="200"
                image={award.image}
                alt={award.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {award.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {award.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AwardsList;
