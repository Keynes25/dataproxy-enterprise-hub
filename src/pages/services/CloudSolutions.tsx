
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
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Desenvolvimento de Software</h1>
              <p className="text-lg text-gray-700 mb-6 text-justify">
                A Dataproxy oferece serviços completos de desenvolvimento de software sob medida, 
                projetados para atender às necessidades específicas do seu negócio. 
                Nossa equipe de desenvolvedores especializados cria soluções robustas, 
                escaláveis e intuitivas que otimizam processos, aumentam a eficiência 
                e impulsionam o crescimento dos nossos clientes.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">Nossos Serviços</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Laptop className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>Aplicações Web:</strong> <span>Sistemas web personalizados, portais empresariais e aplicações SaaS com foco na experiência do usuário e segurança.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Smartphone className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>Aplicações Móveis:</strong> <span>Desenvolvimento de apps para iOS e Android que se integram perfeitamente com sua infraestrutura existente.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Code className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>Software Sob Medida:</strong> <span>Soluções empresariais personalizadas que atendem exatamente às necessidades específicas do seu negócio.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Globe className="h-4 w-4 text-primary-600" />
                      </div>
                      <div>
                        <strong>Integração de Sistemas:</strong> <span>Conectamos sua nova solução com sistemas existentes para um fluxo de trabalho unificado e eficiente.</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-4">
                  <h2 className="text-xl font-semibold mb-2">Nossa Metodologia</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span><strong>1. Análise:</strong> Compreensão profunda das necessidades do seu negócio</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span><strong>2. Design:</strong> Criação de protótipos e arquitetura de software</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span><strong>3. Desenvolvimento:</strong> Codificação com as melhores práticas e tecnologias modernas</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span><strong>4. Teste:</strong> Garantia de qualidade rigorosa e testes abrangentes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span><strong>5. Implementação:</strong> Implantação suave e treinamento completo</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span><strong>6. Manutenção:</strong> Suporte contínuo e atualizações evolutivas</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button size="lg">{t('contact.getInTouch')}</Button>
            </div>
            <div className="flex justify-center items-center">
              <img 
                src="https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Desenvolvimento de software" 
                className="rounded-lg shadow-lg w-full object-cover"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Tecnologias que Utilizamos</h2>
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
                <h3 className="text-xl font-semibold mb-3">Banco de Dados</h3>
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
