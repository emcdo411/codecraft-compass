import React, { useState } from 'react';
import Navigation from './Navigation';
import HomePage from './HomePage';
import CodeReviewPage from './CodeReviewPage';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Construction } from 'lucide-react';

const AppLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleFeatureSelect = (feature: string) => {
    setActiveTab(feature);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage onFeatureSelect={handleFeatureSelect} />;
      case 'code-review':
        return <CodeReviewPage />;
      case 'heatmap':
      case 'test-coach':
      case 'architecture':
      case 'library':
        return (
          <Card className="h-96 flex items-center justify-center">
            <CardContent className="text-center space-y-4">
              <Construction className="w-16 h-16 text-muted-foreground mx-auto" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                <p className="text-muted-foreground mb-4">
                  This feature is currently under development and will be available in a future update.
                </p>
                <Badge variant="outline">In Development</Badge>
              </div>
            </CardContent>
          </Card>
        );
      default:
        return <HomePage onFeatureSelect={handleFeatureSelect} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default AppLayout;