
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
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Venda de Equipamentos Informáticos</h1>
              <p className="text-lg text-gray-700 mb-6 text-justify">
                A Dataproxy oferece uma ampla gama de equipamentos informáticos de alta qualidade, 
                desde computadores e laptops até periféricos e acessórios. Trabalhamos com as 
                principais marcas do mercado para garantir que sua empresa ou uso pessoal tenha 
                acesso à melhor tecnologia disponível, com preços competitivos e suporte técnico especializado.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">Nosso Catálogo</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Laptop className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>Computadores e Laptops:</strong> <span>Estações de trabalho, laptops empresariais e computadores para uso pessoal de marcas reconhecidas.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Monitor className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>Monitores e Periféricos:</strong> <span>Monitores de alta definição, teclados, mouses, webcams e outros acessórios para melhorar sua produtividade.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Printer className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>Impressoras e Multifuncionais:</strong> <span>Equipamentos para impressão, digitalização e cópia para ambientes de escritório de qualquer porte.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Router className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>Equipamentos de Rede:</strong> <span>Roteadores, switches, pontos de acesso e toda infraestrutura necessária para sua conectividade.</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-4">
                  <h2 className="text-xl font-semibold mb-2">Por Que Comprar Conosco</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>Produtos originais com garantia de fábrica</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>Consultoria na escolha do equipamento ideal para sua necessidade</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>Suporte técnico pós-venda</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>Instalação e configuração dos equipamentos (serviço opcional)</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button size="lg">{t('contact.getInTouch')}</Button>
            </div>
            <div className="flex justify-center items-center">
              <img 
                src="https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Equipamentos informáticos" 
                className="rounded-lg shadow-lg w-full object-cover"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Marcas Parceiras</h2>
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
            <h2 className="text-2xl font-bold mb-6">Produtos em Destaque</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <Laptop className="h-24 w-24 text-gray-400" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Laptops Empresariais</h3>
                  <p className="text-gray-600 mt-2">Equipamentos robustos e confiáveis para aumentar a produtividade da sua equipe.</p>
                </div>
              </div>
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <HardDrive className="h-24 w-24 text-gray-400" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Soluções de Armazenamento</h3>
                  <p className="text-gray-600 mt-2">HDDs, SSDs e sistemas NAS para armazenamento seguro dos seus dados.</p>
                </div>
              </div>
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <Cpu className="h-24 w-24 text-gray-400" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Servidores</h3>
                  <p className="text-gray-600 mt-2">Infraestrutura robusta para hospedar seus aplicativos e serviços críticos.</p>
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
