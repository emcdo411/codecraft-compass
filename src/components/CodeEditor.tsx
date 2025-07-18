import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Code, Zap, FileText } from 'lucide-react';

interface CodeEditorProps {
  onAnalyze: (code: string) => void;
  isAnalyzing: boolean;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ onAnalyze, isAnalyzing }) => {
  const [code, setCode] = useState('');

  const handleAnalyze = () => {
    if (code.trim()) {
      onAnalyze(code);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code className="w-5 h-5" />
          Code Input
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2 mb-4">
          <Badge variant="outline" className="flex items-center gap-1">
            <FileText className="w-3 h-3" />
            JavaScript
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <FileText className="w-3 h-3" />
            TypeScript
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <FileText className="w-3 h-3" />
            React
          </Badge>
        </div>
        <Textarea
          placeholder="Paste your code here for AI analysis..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="min-h-[300px] font-mono text-sm"
        />
        <Button 
          onClick={handleAnalyze} 
          disabled={!code.trim() || isAnalyzing}
          className="w-full"
        >
          <Zap className="w-4 h-4 mr-2" />
          {isAnalyzing ? 'Analyzing...' : 'Analyze Code'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CodeEditor;