
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
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Criação de Websites</h1>
              <p className="text-lg text-gray-700 mb-6 text-justify">
                A Dataproxy oferece serviços completos de criação de websites, desde o design 
                e desenvolvimento até a implementação e manutenção. Nossos especialistas criam 
                sites responsivos, atraentes e otimizados que refletem a identidade da sua 
                marca e ajudam a alcançar seus objetivos de negócio online. Seja um site 
                institucional simples ou uma plataforma de e-commerce complexa, entregamos 
                soluções personalizadas para atender às suas necessidades específicas.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">Tipos de Websites</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Globe className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>Sites Institucionais:</strong> <span>Apresente sua empresa e serviços com um site profissional e elegante.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <ShoppingCart className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>Lojas Virtuais:</strong> <span>Venda seus produtos online com uma plataforma de e-commerce completa e segura.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Laptop className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>Portais e Sistemas Web:</strong> <span>Automatize processos com sistemas web personalizados para seu negócio.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <LayoutDashboard className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>Landing Pages:</strong> <span>Capture leads e promova produtos específicos com páginas de conversão otimizadas.</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-4">
                  <h2 className="text-xl font-semibold mb-2">O Que Incluímos</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>Design personalizado e responsivo</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>Otimização para mecanismos de busca (SEO)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>Integração com redes sociais</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>Sistema de gerenciamento de conteúdo (CMS)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>Hospedagem e domínio (opcional)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>Suporte técnico e manutenção</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button size="lg">{t('contact.getInTouch')}</Button>
            </div>
            <div className="flex justify-center items-center">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Criação de websites" 
                className="rounded-lg shadow-lg w-full object-cover"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Nosso Processo de Desenvolvimento</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-6 border rounded-lg relative hover:shadow-md transition-shadow bg-white">
                <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <span className="text-primary-600 font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Briefing e Planejamento</h3>
                <p className="text-gray-600">Compreendemos suas necessidades e objetivos para criar um plano estratégico.</p>
              </div>
              
              <div className="p-6 border rounded-lg relative hover:shadow-md transition-shadow bg-white">
                <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <span className="text-primary-600 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Design e Protótipo</h3>
                <p className="text-gray-600">Criamos layouts e wireframes para visualização e aprovação antes do desenvolvimento.</p>
              </div>
              
              <div className="p-6 border rounded-lg relative hover:shadow-md transition-shadow bg-white">
                <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <span className="text-primary-600 font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Desenvolvimento</h3>
                <p className="text-gray-600">Programamos seu site com as melhores tecnologias e práticas de codificação.</p>
              </div>
              
              <div className="p-6 border rounded-lg relative hover:shadow-md transition-shadow bg-white">
                <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <span className="text-primary-600 font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Lançamento e Suporte</h3>
                <p className="text-gray-600">Publicamos seu site e oferecemos suporte contínuo para garantir seu sucesso online.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Tecnologias que Utilizamos</h2>
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
