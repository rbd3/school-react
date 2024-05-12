import { useState, useEffect } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Greeting from './components/Greeting';


function App() {

  return (
    <>
     <Menu />
     <Greeting />

     <Footer />
    </>
  );
}

export default App
