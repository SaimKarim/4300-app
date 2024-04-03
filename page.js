"use client";
import Hdr from './components/Hdr';
import { useState } from 'react';
import Button from './components/Button';
import './page.module.css';
import Footer from './components/Footer';
import HomeContent from './components/HomeContent';

function Home() {
  
  return (
    <div className='page'>
      <Hdr />
      <HomeContent />
      <Footer />
    </div>
  );
}

export default Home;