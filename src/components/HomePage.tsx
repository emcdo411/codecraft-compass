import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import FeatureCard from './FeatureCard';
import { Code, BarChart3, TestTube, Radar, BookOpen, Zap } from 'lucide-react';

interface HomePageProps {
  onFeatureSelect: (feature: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onFeatureSelect }) => {
  const features = [
    {
      id: 'code-review',
      title: 'AI Code Review',
      description: 'Get instant feedback on your code with AI-powered analysis, suggestions, and best practice recommendations.',
      icon: Code,
      status: 'available' as const,
    },
    {
      id: 'heatmap',
      title: 'Quality Heatmap',
      description: 'Visualize code quality across your project with color-coded heatmaps showing complexity and maintainability.',
      icon: BarChart3,
      status: 'coming-soon' as const,
    },
    {
      id: 'test-coach',
      title: 'Test Coverage Coach',
      description: 'Learn TDD concepts and get AI-generated test suggestions to improve your code coverage.',
      icon: TestTube,
      status: 'coming-soon' as const,
    },
    {
      id: 'architecture',
      title: 'Architecture Radar',
      description: 'Analyze your project structure and get recommendations based on proven architectural patterns.',
      icon: Radar,
      status: 'coming-soon' as const,
    },
    {
      id: 'library',
      title: 'Best Practices Library',
      description: 'Browse curated best practices for React, JavaScript, Git, and software engineering principles.',
      icon: BookOpen,
      status: 'coming-soon' as const,
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-none">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Zap className="w-8 h-8 text-primary" />
            Welcome to CodeCraft Compass
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Your AI-powered mentor for writing better, more maintainable code. 
            Get instant feedback, learn best practices, and level up your development skills.
          </p>
          <div className="flex gap-2">
            <Badge className="bg-green-100 text-green-800">AI-Powered</Badge>
            <Badge className="bg-blue-100 text-blue-800">Real-time Analysis</Badge>
            <Badge className="bg-purple-100 text-purple-800">Beginner Friendly</Badge>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            status={feature.status}
            onClick={() => onFeatureSelect(feature.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;