import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'; 
import './index.css'; 
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Getintouh from './components/Getintouh';
import React, { useState } from 'react'; 
import { motion, useScroll, AnimatePresence } from "framer-motion"  

function App() {

  const { scrollYProgress } = useScroll()
 
  return (
    <HashRouter>  
        <AnimatePresence>
            <motion.div
                style={{
                  scaleX : scrollYProgress,
                  position : 'fixed',
                  top : 0,
                  right : 0,
                  left : 0,
                  height : 5,
                  background : '#F15921',
                  transformOrigin : '0%',
                  zIndex : '9000'
                }}
            >

            </motion.div>
            <Routes>
          
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/gallery' element={<Gallery/>}/>
                <Route path='/pricing' element={<Pricing/>}/>
                <Route path='/contact' element={<Getintouh/>}/> 
            </Routes>

        </AnimatePresence>   
    </HashRouter>
  );
}

export default App;
