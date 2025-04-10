
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon: Icon, title, description, link }: ServiceCardProps) => {
  const { t } = useLanguage();
  
  return (
    <Card className="border-0 shadow-lg card-hover h-full">
      <CardHeader className="pb-2">
        <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary-600" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Link to={link}>
          <Button variant="ghost" className="p-0 text-primary-600 hover:text-primary-700 hover:bg-transparent">
            {t('services.learnMore')} <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
