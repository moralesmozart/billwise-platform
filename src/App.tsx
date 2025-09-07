import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import BillWiseLanding from './components/BillWiseLanding';
import BillWiseExplanation from './components/BillWiseExplanation';

// Loading component
const LoadingSpinner: React.FC = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    fontSize: '1.2rem'
  }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '4px solid rgba(255,255,255,0.3)',
        borderTop: '4px solid white',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        margin: '0 auto 16px'
      }}></div>
      <p>Cargando BillWise...</p>
    </div>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

// Wrapper component to handle navigation state
const AppContent: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'spanish' | 'portuguese' | 'english' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLanguageSelect = async (language: 'spanish' | 'portuguese' | 'english') => {
    setIsLoading(true);
    try {
      setCurrentLanguage(language);
      // Simulate a small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 300));
      navigate(`/explanation/${language}`);
    } catch (error) {
      // Navigation error handled silently in production
      // Only log in development mode
      if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
        console.error('Navigation error:', error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToLanding = () => {
    setCurrentLanguage(null);
    navigate('/');
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

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
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsInitializing(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isInitializing) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <div className="App">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
