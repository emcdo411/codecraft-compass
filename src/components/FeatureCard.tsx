import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  status: 'available' | 'coming-soon';
  onClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  status, 
  onClick 
}) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon className="w-6 h-6 text-primary" />
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
          <Badge variant={status === 'available' ? 'default' : 'secondary'}>
            {status === 'available' ? 'Available' : 'Coming Soon'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        <Button 
          onClick={onClick} 
          disabled={status === 'coming-soon'}
          className="w-full"
          variant={status === 'available' ? 'default' : 'outline'}
        >
          {status === 'available' ? 'Try Now' : 'Coming Soon'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;