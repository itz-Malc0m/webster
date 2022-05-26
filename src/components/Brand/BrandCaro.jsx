// import { useRef, useEffect, useState } from 'react';
import whiskey from '../../assets/whiskey1.png';
import gin from '../../assets/gin1.png';
import { motion } from 'framer-motion';
// import { Carousel } from 'react-bootstrap';
// import { useState } from 'react';
import './BrandCaro.css';

const BrandCaro = () => {
  return (
    <>
      <motion.div className="carousel center">
        <motion.div drag="x" className="inner-carousel">
          <motion.div className="item">
            <img src={gin} alt="pic"></img>
          </motion.div>
          <motion.div className="item">
            <img src={whiskey} alt="pic"></img>
          </motion.div>
          <motion.div className="item">
            <img src={gin} alt="pic"></img>
          </motion.div>
          <motion.div className="item">
            <img src={whiskey} alt="pic"></img>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default BrandCaro;
