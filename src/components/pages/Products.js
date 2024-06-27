import React, { Component, useEffect, useState } from 'react';
import '../../App.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Products(props) {
  const { id } = useParams();
    return <div>
      <h1 className='products'>PRODUCTS {id}</h1>
    </div>
}

// export default function Products(props) {
//   const [posts, setPosts] = useState([])
//   const { id } = useParams();
//   const project = id;
//   const [click, clickedMethod] = useState(0)
  
//   function eventHandler(){
//     console.log('clicked')
//     clickedMethod(click + 1)
//     console.log(click)
//   }

//   useEffect(() =>{
//     axios
//     .get('https://jsonplaceholder.typicode.com/posts')
//     .then(res =>{
//       console.log(res)
//       setPosts(res.data)
//     })
//     .catch(err =>{
//       console.log(err)
//     })
//   }, [])

//   if (!project) {
//     return <h2>Project not found</h2>;
//   }
//   return <div>
//     <h1 className='products'>PRODUCTS {id}</h1>
//     <div>
//       <button onClick={eventHandler}>CLICK MEEEE</button>  
//     </div>    
//     <ul>
//       {posts.map(
//         posts => (
//           <li>{posts.title}</li>
//         )
//       )}
//     </ul>
//   </div>;
// }