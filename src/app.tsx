import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import CodeReviewPage from './pages/CodeReviewPage';

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/code-review" element={<CodeReviewPage />} />
      </Routes>
    </Router>
  );
};

export default App;
