import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Listing from './components/Listing';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Listing />
    </>
  );
};

export default App;