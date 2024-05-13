import { useState, useEffect } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Greeting from './components/Greeting';
import Program from './components/Program';
import Teachers from './components/Teachers';


function App() {

  return (
    <>
     <Menu />
     <Greeting />
     <Program />
     <Teachers />

     <Footer />
    </>
  );
}

export default App
