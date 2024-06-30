// Gallery.js

import React, { useState, useEffect } from 'react';
import { Grid, Card, CardMedia } from '@mui/material';
import './Gallery.css'; // Import your custom CSS for gallery styling

const Gallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically switch images in slideshow mode
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Grid container spacing={3} className="gallery-container">
      <Grid item xs={12}>
        <Card className="gallery-card">
          <CardMedia
            component="img"
            height="300"
            image={images[currentImageIndex]}
            alt={`Gallery Image ${currentImageIndex + 1}`}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default Gallery;
