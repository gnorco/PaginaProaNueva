import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import NavBar from './components/NavBar';
import { Footer } from './components/Footer';
import { Proyectos4to } from './pages/Proyectos4to';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="background-image" id='background-image'></div>
        <div className="content-container">
          <NavBar />
          <Routes>
            <Route path="/proyectos4to" element={<Proyectos4to />} />
          </Routes>
        </div>
      </div>
        <main className='content'>
          <div className="calendar-container">
            <iframe 
              src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=America%2FArgentina%2FBuenos_Aires&showPrint=0&src=Y18zYmRhMjc4ODBhYWJlZmJmMTUyMTBlNGZlN2E3MDg4ODkxYmE1ZTNlYzc5MTViZWQ4ZWRhZDcyZTk2ZWJiZTYzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23F09300" 
              style={{ border: "solid 1px #777", width: "800px", height: "600px" }} 
              frameBorder="0" 
              scrolling="no">
            </iframe>
          </div>
          
        </main>
      <Footer />
    </Router>
  );
}

export default App;
