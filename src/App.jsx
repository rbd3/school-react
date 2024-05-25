import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Greeting from './components/Greeting';
import Program from './components/Program';
import Teachers from './components/Teachers';
import About from './components/About';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={
          <>
            <Greeting />
            <Program />
            <Teachers />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/connexion" element={<Login />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
