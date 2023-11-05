import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Listing from './components/Listing';

const App = () => {
  return (
    <>
      <Navbar />
      <Listing />
    </>
  );
};

export default App;