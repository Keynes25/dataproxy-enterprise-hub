
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
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Consultoria de TI e Suporte</h1>
              <p className="text-lg text-gray-700 mb-6 text-justify">
                A Dataproxy oferece serviços completos de consultoria e suporte em TI para 
                garantir que sua infraestrutura tecnológica funcione perfeitamente e esteja 
                alinhada com os objetivos do seu negócio. Nossa equipe de especialistas está 
                pronta para ajudar sua organização a maximizar o retorno sobre o investimento 
                em tecnologia, minimizando riscos e otimizando processos.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">Serviços Oferecidos</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <HelpCircle className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>Consultoria Estratégica:</strong> <span>Avaliação de infraestrutura, planejamento tecnológico e alinhamento com objetivos de negócios.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <PhoneCall className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>Suporte Técnico:</strong> <span>Suporte remoto e presencial para resolução de problemas, manutenção preventiva e corretiva.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <BarChart className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>Otimização de Sistemas:</strong> <span>Análise de desempenho, implementação de melhorias e recomendações para aumento de eficiência.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Pencil className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>Treinamento:</strong> <span>Capacitação da sua equipe para utilizar eficientemente as soluções tecnológicas implementadas.</span>
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
                      <span>Redução de custos operacionais e tempos de inatividade</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>Aumento da produtividade e eficiência de processos</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>Acesso a conhecimento especializado sem necessidade de contratações</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span>Foco no seu core business enquanto cuidamos da sua TI</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button size="lg">{t('contact.getInTouch')}</Button>
            </div>
            <div className="flex justify-center items-center">
              <img 
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Consultoria de TI e suporte" 
                className="rounded-lg shadow-lg w-full object-cover"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Nossos Planos de Suporte</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-center">Básico</h3>
                <div className="text-3xl font-bold text-center mb-6">Sob Consulta</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Suporte remoto em horário comercial</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Tempo de resposta em até 24 horas</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Monitoramento básico</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Relatórios mensais</span>
                  </li>
                </ul>
                <Button className="w-full">Solicitar Orçamento</Button>
              </div>
              
              <div className="border rounded-lg p-6 shadow-md bg-primary-50 border-primary-200 relative hover:shadow-lg transition-shadow">
                <div className="absolute -top-3 left-0 right-0 flex justify-center">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm">Mais Popular</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Empresarial</h3>
                <div className="text-3xl font-bold text-center mb-6">Sob Consulta</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Suporte remoto e presencial</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Tempo de resposta em até 4 horas</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Monitoramento avançado 24/7</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Consultoria mensal</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Backup gerenciado</span>
                  </li>
                </ul>
                <Button className="w-full">Solicitar Orçamento</Button>
              </div>
              
              <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-center">Premium</h3>
                <div className="text-3xl font-bold text-center mb-6">Sob Consulta</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Suporte prioritário 24/7</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Tempo de resposta em até 1 hora</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Monitoramento proativo</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Consultoria semanal</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Gerenciamento de projetos</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Recuperação de desastres</span>
                  </li>
                </ul>
                <Button className="w-full">Solicitar Orçamento</Button>
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
