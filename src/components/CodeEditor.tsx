import React from 'react';

interface CodeEditorProps {
  code: string;
  setCode: (value: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, setCode }) => {
  return (
    <textarea
      value={code}
      onChange={(e) => setCode(e.target.value)}
      className="w-full h-48 p-4 bg-gray-900 border border-gray-700 rounded text-sm font-mono shadow-inner transition-colors duration-300"
    />
  );
};

export default CodeEditor;
