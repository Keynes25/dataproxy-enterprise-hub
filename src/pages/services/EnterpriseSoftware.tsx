
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
                Oferecemos serviços de hospedagem de websites confiáveis, com alta disponibilidade 
                e desempenho robusto. Nossa infraestrutura redundante garante que seu site 
                permaneça online e acessível 24 horas por dia, 7 dias por semana, 
                com suporte técnico dedicado e monitoramento constante.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">{t('services.keyFeatures')}</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>Hospedagem em servidores de alto desempenho com 99.9% de uptime</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>Certificados SSL gratuitos para garantir a segurança do seu website</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>Backup diário automatizado e proteção contra malware</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>Suporte técnico 24/7 e painel de controle intuitivo</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-4">
                  <h2 className="text-xl font-semibold mb-2">Nossos Planos</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Globe className="h-4 w-4 text-primary-600" />
                      </div>
                      <span><strong>Básico:</strong> Ideal para sites pessoais e pequenos negócios</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Server className="h-4 w-4 text-primary-600" />
                      </div>
                      <span><strong>Empresarial:</strong> Para sites corporativos com tráfego médio</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Cloud className="h-4 w-4 text-primary-600" />
                      </div>
                      <span><strong>Premium:</strong> Soluções escaláveis para e-commerce e aplicações web</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Shield className="h-4 w-4 text-primary-600" />
                      </div>
                      <span><strong>Dedicado:</strong> Servidores dedicados para máximo desempenho</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button size="lg">{t('contact.getInTouch')}</Button>
            </div>
            <div className="flex justify-center items-center">
              <img 
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Serviços de hospedagem de websites" 
                className="rounded-lg shadow-lg w-full object-cover"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Por que escolher nossos serviços de hospedagem?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Desempenho Superior</h3>
                <p className="text-justify">
                  Utilizamos tecnologia de ponta para garantir que seus websites carreguem rapidamente e operem com eficiência. 
                  Nossos servidores são otimizados para fornecer tempos de resposta rápidos e uma experiência de usuário impecável 
                  para seus visitantes.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Segurança Avançada</h3>
                <p className="text-justify">
                  Protegemos seu site contra ameaças com firewalls avançados, proteção contra DDoS, 
                  verificações regulares de segurança e certificados SSL gratuitos. Sua tranquilidade é nossa prioridade.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Suporte Especializado</h3>
                <p className="text-justify">
                  Nossa equipe de suporte técnico está disponível 24/7 para ajudar com qualquer problema ou dúvida. 
                  Oferecemos assistência personalizada para garantir que seu website esteja sempre funcionando perfeitamente.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Escalabilidade</h3>
                <p className="text-justify">
                  À medida que seu negócio cresce, seus recursos de hospedagem podem ser facilmente escalados. 
                  Nossas soluções flexíveis permitem que você aumente recursos conforme necessário, 
                  sem interrupções no serviço.
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
