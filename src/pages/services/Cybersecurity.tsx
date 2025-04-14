
import React, { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowLeft, HelpCircle, PhoneCall, BarChart, Pencil, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Cybersecurity = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    // Navigate to homepage and then scroll to contact section
    window.location.href = '/#contact';
  };

  const handleQuoteRequest = () => {
    // Navigate to homepage contact form with query parameter
    window.location.href = '/#contact';
  };

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
              <h1 className="text-3xl md:text-4xl font-bold mb-6">{t('services.cybersecurity')}</h1>
              <p className="text-lg text-gray-700 mb-6 text-justify">
                {t('services.cybersecurity.full')}
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">{t('services.cybersecurity.services')}</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <HelpCircle className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>{t('services.cybersecurity.strategicConsulting')}:</strong> <span>{t('services.cybersecurity.consultingDesc')}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <PhoneCall className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>{t('services.cybersecurity.techSupport')}:</strong> <span>{t('services.cybersecurity.techSupportDesc')}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <BarChart className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>{t('services.cybersecurity.optimization')}:</strong> <span>{t('services.cybersecurity.optimizationDesc')}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Pencil className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>{t('services.cybersecurity.training')}:</strong> <span>{t('services.cybersecurity.trainingDesc')}</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-4">
                  <h2 className="text-xl font-semibold mb-2">{t('services.cybersecurity.benefits')}</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>{t('services.cybersecurity.benefit1')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>{t('services.cybersecurity.benefit2')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>{t('services.cybersecurity.benefit3')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>{t('services.cybersecurity.benefit4')}</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button size="lg" onClick={scrollToContact}>{t('contact.getInTouch')}</Button>
            </div>
            <div className="flex justify-center items-center">
              <img 
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt={t('services.cybersecurity')}
                className="rounded-lg shadow-lg w-full object-cover"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">{t('services.cybersecurity.supportPlans')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-center">{t('services.cybersecurity.basic')}</h3>
                <div className="text-3xl font-bold text-center mb-6">{t('services.cybersecurity.contactForPrice')}</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{t('services.cybersecurity.basicFeature1')}</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{t('services.cybersecurity.basicFeature2')}</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{t('services.cybersecurity.basicFeature3')}</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{t('services.cybersecurity.basicFeature4')}</span>
                  </li>
                </ul>
                <Button className="w-full" onClick={handleQuoteRequest}>{t('services.cybersecurity.getQuote')}</Button>
              </div>
              
              <div className="border rounded-lg p-6 shadow-md bg-primary-50 border-primary-200 relative hover:shadow-lg transition-shadow">
                <div className="absolute -top-3 left-0 right-0 flex justify-center">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm">{t('services.cybersecurity.mostPopular')}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{t('services.cybersecurity.business')}</h3>
                <div className="text-3xl font-bold text-center mb-6">{t('services.cybersecurity.contactForPrice')}</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{t('services.cybersecurity.businessFeature1')}</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{t('services.cybersecurity.businessFeature2')}</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{t('services.cybersecurity.businessFeature3')}</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{t('services.cybersecurity.businessFeature4')}</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{t('services.cybersecurity.businessFeature5')}</span>
                  </li>
                </ul>
                <Button className="w-full" onClick={handleQuoteRequest}>{t('services.cybersecurity.getQuote')}</Button>
              </div>
              
              <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-center">{t('services.cybersecurity.premium')}</h3>
                <div className="text-3xl font-bold text-center mb-6">{t('services.cybersecurity.contactForPrice')}</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{t('services.cybersecurity.premiumFeature1')}</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{t('services.cybersecurity.premiumFeature2')}</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{t('services.cybersecurity.premiumFeature3')}</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{t('services.cybersecurity.premiumFeature4')}</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{t('services.cybersecurity.premiumFeature5')}</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{t('services.cybersecurity.premiumFeature6')}</span>
                  </li>
                </ul>
                <Button className="w-full" onClick={handleQuoteRequest}>{t('services.cybersecurity.getQuote')}</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cybersecurity;
