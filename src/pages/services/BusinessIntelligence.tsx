
import React, { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowLeft, Monitor, Printer, Laptop, HardDrive, Cpu, Router, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BusinessIntelligence = () => {
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
              <h1 className="text-3xl md:text-4xl font-bold mb-6">{t('services.businessIntelligence')}</h1>
              <p className="text-lg text-gray-700 mb-6 text-justify">
                {t('services.businessIntelligence.full')}
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">{t('services.businessIntelligence.catalog')}</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Laptop className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>{t('services.businessIntelligence.computers')}:</strong> <span>{t('services.businessIntelligence.computersDesc')}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Monitor className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>{t('services.businessIntelligence.monitors')}:</strong> <span>{t('services.businessIntelligence.monitorsDesc')}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Printer className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>{t('services.businessIntelligence.printers')}:</strong> <span>{t('services.businessIntelligence.printersDesc')}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Router className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>{t('services.businessIntelligence.network')}:</strong> <span>{t('services.businessIntelligence.networkDesc')}</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-4">
                  <h2 className="text-xl font-semibold mb-2">{t('services.businessIntelligence.whyChooseUs')}</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>{t('services.businessIntelligence.warranty')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>{t('services.businessIntelligence.consultation')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>{t('services.businessIntelligence.support')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>{t('services.businessIntelligence.installation')}</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button size="lg">{t('contact.getInTouch')}</Button>
            </div>
            <div className="flex justify-center items-center">
              <img 
                src="https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt={t('services.businessIntelligence')} 
                className="rounded-lg shadow-lg w-full object-cover"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">{t('services.businessIntelligence.partners')}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              <div className="flex items-center justify-center p-4 border rounded-lg bg-white hover:shadow-md transition-shadow">
                <p className="font-semibold text-gray-700">Dell</p>
              </div>
              <div className="flex items-center justify-center p-4 border rounded-lg bg-white hover:shadow-md transition-shadow">
                <p className="font-semibold text-gray-700">HP</p>
              </div>
              <div className="flex items-center justify-center p-4 border rounded-lg bg-white hover:shadow-md transition-shadow">
                <p className="font-semibold text-gray-700">Lenovo</p>
              </div>
              <div className="flex items-center justify-center p-4 border rounded-lg bg-white hover:shadow-md transition-shadow">
                <p className="font-semibold text-gray-700">Apple</p>
              </div>
              <div className="flex items-center justify-center p-4 border rounded-lg bg-white hover:shadow-md transition-shadow">
                <p className="font-semibold text-gray-700">Samsung</p>
              </div>
              <div className="flex items-center justify-center p-4 border rounded-lg bg-white hover:shadow-md transition-shadow">
                <p className="font-semibold text-gray-700">Cisco</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">{t('services.businessIntelligence.featured')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <Laptop className="h-24 w-24 text-gray-400" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{t('services.businessIntelligence.businessLaptops')}</h3>
                  <p className="text-gray-600 mt-2">{t('services.businessIntelligence.businessLaptopsDesc')}</p>
                </div>
              </div>
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <HardDrive className="h-24 w-24 text-gray-400" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{t('services.businessIntelligence.storage')}</h3>
                  <p className="text-gray-600 mt-2">{t('services.businessIntelligence.storageDesc')}</p>
                </div>
              </div>
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <Cpu className="h-24 w-24 text-gray-400" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{t('services.businessIntelligence.servers')}</h3>
                  <p className="text-gray-600 mt-2">{t('services.businessIntelligence.serversDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessIntelligence;
