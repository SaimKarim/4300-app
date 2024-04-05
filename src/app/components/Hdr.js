import React from 'react';
import './Hdr.css';
import Button from './Button';
import { Link } from 'react-router-dom';

const Hdr = () => {
  
  return (
    <div className="hdr">
      <h1><i>Dawg</i>Walk</h1>
      <ul>
        <h2><Link to="/about">Add a Run!</Link></h2>
      </ul>
    </div>
  );
};

export default Hdr;