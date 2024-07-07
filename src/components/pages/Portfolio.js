import React from 'react';
import { Chrono } from "react-chrono";
import Timeline from './Timeline';
import Introduction from './Introduction';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Skills from './Skills'
import ProjectList from './ProjectsInPortfolio'

export default function Portfolio() {


  return (
    <div>
      <Introduction />
      <WorkExperience />
      <Education />
      <Skills />
      <ProjectList />
    </div>
  );

//   const items = [{
//     title: "May 1940",
//     cardTitle: "Dunkirk",
//     url: "http://www.history.com",
//     cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
//     cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
//     media: {
//       type: "IMAGE",
//       source: {
//         url: "http://someurl/image.jpg"
//       }
//     }
//   }, {
//     title: "May 1960",
//     cardTitle: "Dunkirk",
//     url: "http://www.history.com",
//     cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
//     cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
//     media: {
//       type: "IMAGE",
//       source: {
//         url: "http://someurl/image.jpg"
//       }
//     }
//   }, {
//     title: "May 1980",
//     cardTitle: "Dunkirk",
//     url: "http://www.history.com",
//     cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
//     cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
//     media: {
//       type: "IMAGE",
//       source: {
//         url: "http://someurl/image.jpg"
//       }
//     }
//   }, {
//     title: "7 December 1941",
//     cardTitle: "Pearl Harbor",
//     media: {
//       source: {
//         url: "https://www.youtube.com/embed/f6cz9gtMTeI",
//         type: "mp4"
//       },
//       type: "VIDEO",
//       name: "Pearl Harbor"
//     }
//   }
// ];

//   return <div>
//     <h1 className='services'>Portfolio</h1>
//     <div align='center' >
//     <div style={{ width: '1000px', height: '950px'}}  >
//         <Chrono items={items} mode="VERTICAL_ALTERNATING" scrollable={{ scrollbar: true }} />
//       </div>
//     </div>
//     </div>;
}
