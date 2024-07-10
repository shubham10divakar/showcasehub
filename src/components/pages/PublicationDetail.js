// src/components/PublicationDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './PublicationDetail.css';
import imag1 from '../../images/ProjectsImages/plantdiseasedetection.jpg'

const publications = [
  { id: 1, title: 'Smote-DL: A Deep Learning Based Plant Disease Detection Method', year: 2021, citations: 22, GoogleScholarLink: 'https://ieeexplore.ieee.org/abstract/document/9417920', domain: 'Plant Disease Detection', imageUrl: imag1, abstract: 'In the due course of time, computer vision, machine learning and deep learning has been widely used to detect disease in the plant leaf. Most works done in this area focuses upon coming up with accurate models but does not focus on the false predictions which could be a serious cause. Misdiagnosis of the plant leaf could cause large scale crop destruction. We used a publicly available dataset which contained four categories of images belonging to Apple Plant-Healthy, Scab, Rust and Multiple disease.However this dataset upon visualization was found to be imbalanced. Our main objective isto reduce the false predictions. The main contribution lies in the use of SMOTE method to balance the dataset and the novel Ensemble algorithm which uses both F1 score and accuracy to compare and come up with the best classifier from among the classifiers. Upon experimentation we came up with Efficient NetB7 as the best classifier from our list of classifier which had both good accuracy and good F1 Score. It also predicts whether a leaf image has multiple disease or not which helps to reduce false predictions further.',
    findings: 'The main contribution lies in the use of SMOTE method to balance the dataset and the novel Ensemble algorithm which uses both F1 score and accuracy to compare and come up with the best classifier from among the classifiers. Upon experimentation we came up with Efficient NetB7 as the best classifier from our list of classifier which had both good accuracy and good F1 Score. It also predicts whether a leaf image has multiple disease or not which helps to reduce false predictions further.',
    details: 'Major details of Publication 1' },
  { id: 2, title: 'COLEN-An Improvised Deep Learning Model for Plant Disease Detection Using Varying Color Space', year: 2022, citations: 2, GoogleScholarLink: 'https://link.springer.com/chapter/10.1007/978-3-031-31164-2_50', domain: 'Plant Disease Detection', imageUrl: imag1,  abstract: 'Plant disease detection is a rapidly evolving area of research with new techniques being discovered and proposed almost every year. Most work done in this field focuses upon increasing the accuracy of the classifiers, however when it comes to real images taken from fields, the accuracy drops drastically due to varying light intensity and background of the images. In this paper a novice approach has been used to improvise the performance of the plant disease detection model. It has been seen from the tremendous experimentation that, mostly in Red Green Blue (RGB) input images, while detecting the diseased leaf images, the green channel in healthy part dominates the blue channel in the diseased part of the same leaf which is found to be one of the other factors which is reducing the accuracy. Hence, here eight widely used color spaces are considered to measure the impact of the performance of the model by changing the color space. For conducting the experimentation on the proposed idea, a public dataset is being used in varying color spaces against RGB space. From the experimentation results it has been observed that for the majority of the classifiers, for the Hue Saturation and Lightness (HSL) color space the accuracy was more than the accuracy for RGB or any other color space. Furthermore, to improvise the performance, an ensemble algorithm named as COLEN has been proposed to choose the color space with the maximum accuracy and F1 score.',
    findings: 'From the experimentation results it has been observed that for the majority of the classifiers, for the Hue Saturation and Lightness (HSL) color space the accuracy was more than the accuracy for RGB or any other color space. Furthermore, to improvise the performance, an ensemble algorithm named as COLEN has been proposed to choose the color space with the maximum accuracy and F1 score.',
    details: 'Major details of Publication 2' },
  // Add more publications as needed
];

const PublicationDetail = () => {
  const { id } = useParams();
  const publication = publications.find((pub) => pub.id === parseInt(id));

  if (!publication) {
    return <h2>Publication not found</h2>;
  }

  return (
    <div className="publication-detail">
      <img src={publication.imageUrl} alt={publication.title} className="detail-image" />
      <h1>{publication.title}</h1>
      <p><strong>Year:</strong> {publication.year}</p>
      <p><strong>Citations:</strong> {publication.citations}</p>
      <div className="detail-section">
        <h2>Abstract</h2>
        <p>{publication.abstract}</p>
      </div>
      <div className="detail-section">
        <h2>Findings</h2>
        <p>{publication.findings}</p>
      </div>
      <div className="detail-section">
        <h2>Major Details</h2>
        <p>{publication.details}</p>
      </div>
    </div>
  );
};

export default PublicationDetail;
