import React, { useState } from "react";

const CodeReviewPage = () => {
  const [code, setCode] = useState("");
  const [feedback, setFeedback] = useState("");

  const analyzeCode = () => {
    if (code.includes("useEffect")) {
      setFeedback("✅ Great job! You're using React hooks effectively.");
    } else if (code.includes("function") && code.length > 60) {
      setFeedback("🟡 Good start. Try using hooks like useEffect or useState.");
    } else {
      setFeedback("🔴 Consider using modern React features and separating logic into components.");
    }
  };

  return (
    <div className="card">
      <h2 className="text-2xl mb-4">Submit Code for AI Review</h2>
      <textarea
        className="w-full h-48 p-4 bg-gray-900 text-white rounded-md"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your React or TypeScript code here..."
      />
      <button className="button mt-4" onClick={analyzeCode}>
        Analyze Code
      </button>
      {feedback && <div className="mt-4 text-lg">{feedback}</div>}
    </div>
  );
};

export default CodeReviewPage;

