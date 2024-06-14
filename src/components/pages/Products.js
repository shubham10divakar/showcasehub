import React from 'react';
import '../../App.css';
import { useParams } from 'react-router-dom';

export default function Products(props) {
  const { id } = useParams();
  const project = id;

  if (!project) {
    return <h2>Project not found</h2>;
  }
  return <h1 className='products'>PRODUCTS {id}</h1>;
}
