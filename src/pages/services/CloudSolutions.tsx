
import React, { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowLeft, Code, Laptop, Smartphone, Globe, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CloudSolutions = () => {
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
              <h1 className="text-3xl md:text-4xl font-bold mb-6">{t('services.cloudSolutions')}</h1>
              <p className="text-lg text-gray-700 mb-6 text-justify">
                {t('services.cloudSolutions.full')}
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">{t('services.keyFeatures')}</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Laptop className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        {t('services.cloudSolutions.feature1')}
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Smartphone className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        {t('services.cloudSolutions.feature2')}
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Code className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        {t('services.cloudSolutions.feature3')}
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-4">
                  <h2 className="text-xl font-semibold mb-2">{t('services.title')}</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>{t('services.dataManagement')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>{t('services.cloudSolutions')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>{t('services.cybersecurity')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>{t('services.enterpriseSoftware')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>{t('services.businessIntelligence')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>{t('services.itConsulting')}</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Link to="/#contact">
                <Button size="lg">{t('contact.getInTouch')}</Button>
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <img 
                src="https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt={t('services.cloudSolutions')}
                className="rounded-lg shadow-lg w-full object-cover"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">{t('services.cloudSolutions.technologies')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-semibold mb-3">Frontend</h3>
                <p className="text-gray-600">React, Angular, Vue, HTML5, CSS3, JavaScript, TypeScript</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-semibold mb-3">Backend</h3>
                <p className="text-gray-600">Node.js, PHP, Python, Java, .NET, Ruby, Go</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-semibold mb-3">Mobile</h3>
                <p className="text-gray-600">React Native, Flutter, Swift, Kotlin, Xamarin</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-semibold mb-3">{t('services.cloudSolutions.database')}</h3>
                <p className="text-gray-600">MySQL, PostgreSQL, MongoDB, SQL Server, Oracle, Redis</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CloudSolutions;
