import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import BillWiseLanding from './components/BillWiseLanding';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BillWiseLanding />} />
          <Route path="*" element={<BillWiseLanding />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
