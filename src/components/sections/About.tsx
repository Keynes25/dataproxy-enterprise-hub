
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  const features = [
    'features.security',
    'features.team',
    'features.solutions',
    'features.support',
    'features.innovation',
    'features.global',
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1280" 
                alt="Dataproxy Enterprise Team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-primary-100 rounded-full -z-10"></div>
          </div>

          {/* Content Section */}
          <div>
            <h2 className="mb-6">{t('about.title')}</h2>
            <p className="text-gray-600 mb-6">
              {t('about.p1')}
            </p>
            <p className="text-gray-600 mb-8">
              {t('about.p2')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((featureKey, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t(featureKey)}</span>
                </div>
              ))}
            </div>

            <Button className="bg-primary-600 hover:bg-primary-700">
              {t('about.learnMore')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
