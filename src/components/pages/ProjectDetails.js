import React, { Component, useEffect, useState } from 'react';
import '../../App.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProjectDetailsView from './ProjectDetailsView';

export default function ProjectDetails(props) {
  const { id } = useParams();
    return <div>
      {/* <h1 className='products'>Project {id}</h1> */}
        <ProjectDetailsView></ProjectDetailsView>
    </div>
}
