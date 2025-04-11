
import React, { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowLeft, Laptop, PenTool, LayoutDashboard, Globe, ShoppingCart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ItConsulting = () => {
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
              <h1 className="text-3xl md:text-4xl font-bold mb-6">{t('services.itConsulting')}</h1>
              <p className="text-lg text-gray-700 mb-6 text-justify">
                {t('services.itConsulting.full')}
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">{t('services.itConsulting.types')}</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Globe className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>{t('services.itConsulting.corporate')}:</strong> <span>{t('services.itConsulting.corporateDesc')}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <ShoppingCart className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>{t('services.itConsulting.ecommerce')}:</strong> <span>{t('services.itConsulting.ecommerceDesc')}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Laptop className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>{t('services.itConsulting.webPortals')}:</strong> <span>{t('services.itConsulting.webPortalsDesc')}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <LayoutDashboard className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>{t('services.itConsulting.landingPages')}:</strong> <span>{t('services.itConsulting.landingPagesDesc')}</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-4">
                  <h2 className="text-xl font-semibold mb-2">{t('services.itConsulting.included')}</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>{t('services.itConsulting.design')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>{t('services.itConsulting.seo')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>{t('services.itConsulting.socialMedia')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>{t('services.itConsulting.cms')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>{t('services.itConsulting.hosting')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>{t('services.itConsulting.support')}</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button size="lg">{t('contact.getInTouch')}</Button>
            </div>
            <div className="flex justify-center items-center">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt={t('services.itConsulting')}
                className="rounded-lg shadow-lg w-full object-cover"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">{t('services.itConsulting.process')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-6 border rounded-lg relative hover:shadow-md transition-shadow bg-white">
                <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <span className="text-primary-600 font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('services.itConsulting.brief')}</h3>
                <p className="text-gray-600">{t('services.itConsulting.briefDesc')}</p>
              </div>
              
              <div className="p-6 border rounded-lg relative hover:shadow-md transition-shadow bg-white">
                <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <span className="text-primary-600 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('services.itConsulting.prototype')}</h3>
                <p className="text-gray-600">{t('services.itConsulting.prototypeDesc')}</p>
              </div>
              
              <div className="p-6 border rounded-lg relative hover:shadow-md transition-shadow bg-white">
                <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <span className="text-primary-600 font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('services.itConsulting.development')}</h3>
                <p className="text-gray-600">{t('services.itConsulting.developmentDesc')}</p>
              </div>
              
              <div className="p-6 border rounded-lg relative hover:shadow-md transition-shadow bg-white">
                <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <span className="text-primary-600 font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('services.itConsulting.launch')}</h3>
                <p className="text-gray-600">{t('services.itConsulting.launchDesc')}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">{t('services.itConsulting.technologies')}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              <div className="flex items-center justify-center p-4 border rounded-lg bg-white hover:shadow-md transition-shadow">
                <p className="font-semibold text-gray-700">WordPress</p>
              </div>
              <div className="flex items-center justify-center p-4 border rounded-lg bg-white hover:shadow-md transition-shadow">
                <p className="font-semibold text-gray-700">Shopify</p>
              </div>
              <div className="flex items-center justify-center p-4 border rounded-lg bg-white hover:shadow-md transition-shadow">
                <p className="font-semibold text-gray-700">WooCommerce</p>
              </div>
              <div className="flex items-center justify-center p-4 border rounded-lg bg-white hover:shadow-md transition-shadow">
                <p className="font-semibold text-gray-700">React</p>
              </div>
              <div className="flex items-center justify-center p-4 border rounded-lg bg-white hover:shadow-md transition-shadow">
                <p className="font-semibold text-gray-700">PHP</p>
              </div>
              <div className="flex items-center justify-center p-4 border rounded-lg bg-white hover:shadow-md transition-shadow">
                <p className="font-semibold text-gray-700">Laravel</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ItConsulting;
