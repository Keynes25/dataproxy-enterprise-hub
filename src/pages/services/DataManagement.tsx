
import React, { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowLeft, Database, FileCheck, LayoutDashboard, Users, CreditCard, ShoppingBag, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DataManagement = () => {
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
              <h1 className="text-3xl md:text-4xl font-bold mb-6">{t('services.dataManagement')}</h1>
              <p className="text-lg text-gray-700 mb-6 text-justify">
                {t('services.dataManagement.full')}
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">{t('services.keyFeatures')}</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <CreditCard className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>{t('services.dataManagement.salesSystem')}:</strong> <span>{t('services.dataManagement.salesSystemDesc')}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <ShoppingBag className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>{t('services.dataManagement.inventory')}:</strong> <span>{t('services.dataManagement.inventoryDesc')}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <FileCheck className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>{t('services.dataManagement.accounting')}:</strong> <span>{t('services.dataManagement.accountingDesc')}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Users className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>{t('services.dataManagement.hr')}:</strong> <span>{t('services.dataManagement.hrDesc')}</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-4">
                  <h2 className="text-xl font-semibold mb-2">{t('services.dataManagement.benefits')}</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>{t('services.dataManagement.benefit1')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>{t('services.dataManagement.benefit2')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>{t('services.dataManagement.benefit3')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>{t('services.dataManagement.benefit4')}</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button size="lg">{t('contact.getInTouch')}</Button>
            </div>
            <div className="flex justify-center items-center">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt={t('services.dataManagement')} 
                className="rounded-lg shadow-lg w-full object-cover"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">{t('services.dataManagement.transformation')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <Database className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{t('services.dataManagement.dataCentralization')}</h3>
                <p className="text-justify">
                  {t('services.dataManagement.dataCentralizationDesc')}
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <LayoutDashboard className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{t('services.dataManagement.dashboards')}</h3>
                <p className="text-justify">
                  {t('services.dataManagement.dashboardsDesc')}
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <FileCheck className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{t('services.dataManagement.automation')}</h3>
                <p className="text-justify">
                  {t('services.dataManagement.automationDesc')}
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

export default DataManagement;
