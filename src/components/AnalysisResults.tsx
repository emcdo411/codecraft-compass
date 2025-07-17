import React from 'react';

interface AnalysisResultsProps {
  code: string;
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({ code }) => {
  const getMockFeedback = () => {
    const feedback: string[] = [];

    if (!code || code.trim() === '') {
      feedback.push('No code detected. Paste something to get started.');
    } else {
      if (code.includes('useEffect')) {
        feedback.push('Great use of useEffect, but consider cleanup functions.');
      }

      if ((code.match(/function\s/g) || []).length > 2) {
        feedback.push('You have several functions — consider breaking large ones into smaller pieces.');
      }

      if (code.includes('var ')) {
        feedback.push('Avoid using "var". Prefer "let" or "const" for modern code clarity.');
      }

      if (code.length > 600) {
        feedback.push('This file is getting long. Consider separating concerns into multiple files.');
      }

      if (feedback.length === 0) {
        feedback.push('✅ This code is clean, concise, and modular.');
      }
    }

    return feedback;
  };

  return (
    <div className="mt-6 p-5 border border-green-400 bg-gray-800 rounded-md transition-all duration-500 ease-in-out shadow-lg">
      <h3 className="text-lg font-bold text-green-300 mb-3">AI Feedback</h3>
      <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
        {getMockFeedback().map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnalysisResults;
