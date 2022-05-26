import React from 'react';
import './App.css';
// import { Container } from '@material-ui/core';

import NavBar from './components/NavBar/NavBar';
import Header from './components/Hero/Header';
import About from './components/About/AboutUs';
import Brand from './components/Brand/Brand';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Brand />
      <Footer />

      {/* <Hero /> */}
    </>
  );
}

export default App;
