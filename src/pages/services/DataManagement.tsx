
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
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Sistema de Gestão</h1>
              <p className="text-lg text-gray-700 mb-6 text-justify">
                Nossos serviços abrangem o fornecimento de sistemas de gestão completos, 
                meticulosamente projetados para atender às necessidades específicas de empresas 
                em diversos setores, incluindo faturamento, recursos humanos, contabilidade, 
                gestão de estoque e compras. Estas soluções são concebidas com base em uma 
                compreensão profunda dos desafios enfrentados pelos nossos clientes, 
                visando oferecer eficiência, precisão e controle em todas as etapas do processo.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">Módulos Disponíveis</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <CreditCard className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>Sistema de Vendas:</strong> <span>Aumente suas vendas e melhore a experiência do cliente com ferramentas abrangentes para gerenciar leads, oportunidades, cotações e pedidos.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <ShoppingBag className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>Gestão de Estoque:</strong> <span>Otimize seu inventário com controle preciso de estoque, rastreamento em tempo real, e alertas automáticos de reposição.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <FileCheck className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>Contabilidade:</strong> <span>Simplifique processos contábeis com um sistema integrado que gerencia relatórios financeiros, conciliações e conformidade fiscal.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Users className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>Recursos Humanos:</strong> <span>Gerencie todo o ciclo de vida do funcionário, desde o recrutamento até a aposentadoria, com ferramentas para folha de pagamento, férias e avaliações.</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-4">
                  <h2 className="text-xl font-semibold mb-2">Benefícios</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>Soluções personalizadas para seus requisitos específicos</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>Integração perfeita entre todos os módulos de negócios</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>Interfaces intuitivas e fáceis de usar</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>Suporte técnico contínuo e treinamento para sua equipe</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button size="lg">{t('contact.getInTouch')}</Button>
            </div>
            <div className="flex justify-center items-center">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Sistema de gestão empresarial" 
                className="rounded-lg shadow-lg w-full object-cover"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Como Nosso Sistema de Gestão Pode Transformar Seu Negócio</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <Database className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Centralização de Dados</h3>
                <p className="text-justify">
                  Elimine silos de informação e centralize todos os dados críticos em uma única plataforma, 
                  proporcionando uma visão holística do seu negócio e facilitando a tomada de decisões estratégicas.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <LayoutDashboard className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Painéis e Relatórios</h3>
                <p className="text-justify">
                  Acesse painéis interativos e relatórios detalhados para monitorar o desempenho do negócio em tempo real, 
                  identificar tendências e detectar oportunidades de melhoria com facilidade.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <FileCheck className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Automação</h3>
                <p className="text-justify">
                  Automatize processos manuais repetitivos para aumentar a eficiência, reduzir erros e permitir que 
                  sua equipe se concentre em atividades estratégicas que agregam mais valor ao negócio.
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
