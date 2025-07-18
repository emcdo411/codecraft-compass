import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, Home, BookOpen, TestTube, Radar, BarChart3 } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'code-review', label: 'Code Review', icon: Code },
    { id: 'heatmap', label: 'Quality Heatmap', icon: BarChart3 },
    { id: 'test-coach', label: 'Test Coach', icon: TestTube },
    { id: 'architecture', label: 'Architecture', icon: Radar },
    { id: 'library', label: 'Best Practices', icon: BookOpen },
  ];

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Code className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold">CodeCraft Compass</h1>
              <Badge variant="outline" className="text-xs">
                AI Code Mentor
              </Badge>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => onTabChange(tab.id)}
                  className="flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

