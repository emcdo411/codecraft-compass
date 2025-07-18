import React, { useState } from 'react';
import CodeEditor from './CodeEditor';
import AnalysisResults from './AnalysisResults';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

interface AnalysisResult {
  score: number;
  rating: string;
  suggestions: string[];
  strengths: string[];
  issues: string[];
}

const CodeReviewPage: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const analyzeCode = async (code: string) => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis with mock data
    setTimeout(() => {
      const mockResult: AnalysisResult = {
        score: Math.floor(Math.random() * 40) + 60, // 60-100
        rating: ['Excellent', 'Good', 'Needs Improvement'][Math.floor(Math.random() * 3)],
        strengths: [
          'Good variable naming conventions',
          'Proper function decomposition',
          'Consistent code formatting'
        ],
        issues: [
          'Consider adding error handling',
          'Some functions could be more modular',
          'Missing input validation'
        ],
        suggestions: [
          'Add TypeScript for better type safety',
          'Implement proper error boundaries',
          'Consider using custom hooks for state logic',
          'Add unit tests for better coverage'
        ]
      };
      
      setResult(mockResult);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>AI Code Review Engine</CardTitle>
        </CardHeader>
        <CardContent>
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              Paste your JavaScript, TypeScript, or React code below for instant AI-powered analysis and suggestions.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CodeEditor onAnalyze={analyzeCode} isAnalyzing={isAnalyzing} />
        <div>
          {result ? (
            <AnalysisResults result={result} />
          ) : (
            <Card className="h-full flex items-center justify-center">
              <CardContent className="text-center text-muted-foreground">
                <p>Analysis results will appear here after you submit your code.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeReviewPage;