
import React, { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowLeft, Globe, Server, Cloud, Shield, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const EnterpriseSoftware = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/#services">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> {t('services.backToServices')}
            </Button>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">{t('services.enterpriseSoftware')}</h1>
              <p className="text-lg text-gray-700 mb-6 text-justify">
                {t('services.enterpriseSoftware.full')}
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">{t('services.keyFeatures')}</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>{t('services.enterpriseSoftware.feature1')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>{t('services.enterpriseSoftware.feature2')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>{t('services.enterpriseSoftware.feature3')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>{t('services.enterpriseSoftware.feature4')}</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-4">
                  <h2 className="text-xl font-semibold mb-2">{t('services.enterpriseSoftware.plans')}</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Globe className="h-4 w-4 text-primary-600" />
                      </div>
                      <span><strong>{t('services.enterpriseSoftware.basic')}:</strong> {t('services.enterpriseSoftware.basicDesc')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Server className="h-4 w-4 text-primary-600" />
                      </div>
                      <span><strong>{t('services.enterpriseSoftware.business')}:</strong> {t('services.enterpriseSoftware.businessDesc')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Cloud className="h-4 w-4 text-primary-600" />
                      </div>
                      <span><strong>{t('services.enterpriseSoftware.premium')}:</strong> {t('services.enterpriseSoftware.premiumDesc')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Shield className="h-4 w-4 text-primary-600" />
                      </div>
                      <span><strong>{t('services.enterpriseSoftware.dedicated')}:</strong> {t('services.enterpriseSoftware.dedicatedDesc')}</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button size="lg">{t('contact.getInTouch')}</Button>
            </div>
            <div className="flex justify-center items-center">
              <img 
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt={t('services.enterpriseSoftware')}
                className="rounded-lg shadow-lg w-full object-cover"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">{t('services.enterpriseSoftware.whyChoose')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{t('services.enterpriseSoftware.performance')}</h3>
                <p className="text-justify">
                  {t('services.enterpriseSoftware.performanceDesc')}
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{t('services.enterpriseSoftware.security')}</h3>
                <p className="text-justify">
                  {t('services.enterpriseSoftware.securityDesc')}
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{t('services.enterpriseSoftware.support')}</h3>
                <p className="text-justify">
                  {t('services.enterpriseSoftware.supportDesc')}
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{t('services.enterpriseSoftware.scalability')}</h3>
                <p className="text-justify">
                  {t('services.enterpriseSoftware.scalabilityDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EnterpriseSoftware;
