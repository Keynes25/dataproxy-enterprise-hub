
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 bg-gradient-to-r from-gray-50 to-blue-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute right-0 bottom-0 -mb-48 -mr-48 w-96 h-96 rounded-full bg-primary-100"></div>
        <div className="absolute left-0 top-0 -ml-32 -mt-32 w-80 h-80 rounded-full bg-secondary-100"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl animate-slide-up">
            <h1 className="mb-6">
              <span className="block text-gray-800 mb-2">{t('hero.subtitle')}</span>
              <span className="gradient-text">{t('hero.title')}</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 md:text-xl">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services">
                <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                  {t('hero.solutions')} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="#contact">
                <Button size="lg" variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50">
                  {t('hero.contact')}
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex items-center">
              <p className="text-gray-600 mr-4">{t('hero.trusted')}</p>
              <div className="flex space-x-6">
                {/* Replace with actual client/partner logos */}
                <div className="h-8 w-20 bg-gray-400/20 rounded"></div>
                <div className="h-8 w-20 bg-gray-400/20 rounded"></div>
                <div className="h-8 w-20 bg-gray-400/20 rounded"></div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1280" 
                alt="Data visualization dashboard" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/30 to-transparent mix-blend-multiply"></div>
            </div>
            <div className="absolute top-8 -right-8 w-64 h-64 bg-secondary-200 rounded-full -z-10 blur-2xl opacity-60"></div>
            <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-primary-200 rounded-full -z-10 blur-2xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

