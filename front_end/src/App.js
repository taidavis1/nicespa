import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FloatBtn from './components/FloatBtn';
import React, { useState } from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Staff from './components/Staff';
import SocialTree from './components/SocialTree';
import { Route , Routes , useLocation } from 'react-router-dom';
import Services from './components/Services';
function App() {
  const IsTree = useLocation().pathname.includes('/SocialTree');
  return (
    
    <main className=' font-newFont'>
      {!IsTree ? (
      <>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/Services' element = {<Services />} />
          <Route path='/Staff' element = {<Staff />} />
          <Route path='/Contact' element = {<Contact />} />
        </Routes>
        <FloatBtn />
        <Footer />
        </>
      ): (
        <Routes>
          <Route path='/SocialTree' element = {<SocialTree />} />
        </Routes>
      )
    }
      </main>
  );
}

export default App;
