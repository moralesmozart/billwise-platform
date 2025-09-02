import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import BillWiseLanding from './components/BillWiseLanding';
import BillWiseExplanation from './components/BillWiseExplanation';

// Wrapper component to handle navigation state
const AppContent: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'spanish' | 'portuguese' | 'english' | null>(null);
  const navigate = useNavigate();

  const handleLanguageSelect = (language: 'spanish' | 'portuguese' | 'english') => {
    setCurrentLanguage(language);
    navigate(`/explanation/${language}`);
  };

  const handleBackToLanding = () => {
    setCurrentLanguage(null);
    navigate('/');
  };

  return (
    <Routes>
      <Route path="/" element={
        <BillWiseLanding onLanguageSelect={handleLanguageSelect} />
      } />
      <Route path="/explanation/:language" element={
        <BillWiseExplanation 
          language={currentLanguage || 'spanish'} 
          onBack={handleBackToLanding} 
        />
      } />
      <Route path="*" element={<BillWiseLanding onLanguageSelect={handleLanguageSelect} />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
