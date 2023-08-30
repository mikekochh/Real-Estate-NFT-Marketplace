import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar';

const App = () => (
  <div>
    <Navbar />
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  </div>

);

export default App;
