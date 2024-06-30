// AwardsPage.js

import React from 'react';
import { Typography } from '@mui/material';
import AwardsList from '../components/AwardsList';
import awards from './pages/AwardsListJS';

// const awards = [
//   {
//     id: 1,
//     title: 'Award 1',
//     description: 'Description of Award 1.',
//     image: '/images/award1.jpg',
//     gallery: ['/images/award1_1.jpg', '/images/award1_2.jpg', '/images/award1_3.jpg'],
//   },
//   {
//     id: 2,
//     title: 'Award 2',
//     description: 'Description of Award 2.',
//     image: '/images/award2.jpg',
//     gallery: ['/images/award2_1.jpg', '/images/award2_2.jpg'],
//   },
//   {
//     id: 3,
//     title: 'Award 3',
//     description: 'Description of Award 3.',
//     image: '/images/award3.jpg',
//     gallery: ['/images/award3_1.jpg', '/images/award3_2.jpg', '/images/award3_3.jpg'],
//   },
//   {
//     id: 4,
//     title: 'Award 4',
//     description: 'Description of Award 4.',
//     gallery: ['/images/award3_1.jpg', '/images/award3_2.jpg', '/images/award3_3.jpg'],
//   },
//   {
//     id: 5,
//     title: 'Award 5',
//     description: 'Description of Award 5.',
//     gallery: ['/images/award3_1.jpg', '/images/award3_2.jpg', '/images/award3_3.jpg'],
//   },
//   {
//     id: 6,
//     title: 'Award 6',
//     description: 'Description of Award 6.',
//     gallery: ['/images/award3_1.jpg', '/images/award3_2.jpg', '/images/award3_3.jpg'],
//   },
// ];

const AwardsPage = () => {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Awards
      </Typography>
      <AwardsList awards={awards} />
    </div>
  );
};

export default AwardsPage;
