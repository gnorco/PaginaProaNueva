import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css'
import NavBar from './components/NavBar'
import { Footer } from './components/Footer';
import { Proyectos4to } from './pages/Proyectos4to';


const App = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="background-image"></div>
        <div className="content-container">
          <NavBar />
          <Routes>
            <Route path="/proyectos4to" element={<Proyectos4to />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
