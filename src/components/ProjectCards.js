import React from 'react';
import '../components/ProjectCards.css'
import CardItem from './CardItem';
import image1 from '../images/img-1.jpg'
import image2 from '../images/img-2.jpg'
import image3 from '../images/img-3.jpg'
import image4 from '../images/img-4.jpg'
import image5 from '../images/img-5.jpg'

import networktool from '../images/ProjectsImages/network_analysis.jpg'
import ssldscan from '../images/ProjectsImages/network_analysis_ssld.jpg'
import womensafety from '../images/ProjectsImages/womenssafety.jpg'
import Drowsiness from '../images/ProjectsImages/drowziness detection.jpeg'
import plant from '../images/ProjectsImages/plantdiseasedetection.jpg'


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={networktool}
              text='Network-Analysis-Tool'
              label='Network Analysis'
              path='/projectdetails/1'
              year='2024'
            />
            <CardItem
              src={ssldscan}
              text='SSLSecureDiveScan'
              label='Network Analysis'
              path='/products/2'
              year='2024'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={womensafety}
              text='ALICE-FOR-WOMEN-Safety'
              label='Android'
              path='/products/3'
              year='2017'
            />
            <CardItem
              src={Drowsiness}
              text='Drowsiness-Detection '
              label='AI/ML'
              path='/products/4'
              year='2019'
            />
            <CardItem
              src={plant}
              text='Plant-Disease-Detection-SIH-2019'
              label='AI/ML'
              path='/products/5'
              year='2019'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
