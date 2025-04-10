
import React, { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Target, Eye, Heart } from 'lucide-react';

const AboutUs = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            {t('about.title')}
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Mission Section */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-semibold">Missão</h2>
              </div>
              <p className="text-gray-700 text-justify">
                Nossa missão na Dataproxy é fornecer soluções de Tecnologia da Informação (TI) personalizadas e de alta qualidade que atendam às necessidades específicas de nossos clientes, impulsionando seu sucesso e crescimento. Buscamos simplificar a tecnologia, oferecendo consultoria especializada e suporte contínuo para garantir que nossos clientes possam aproveitar ao máximo suas infraestruturas de TI. Estamos comprometidos em criar valor tangível para nossos clientes, ajudando-os a alcançar seus objectivos de negócios de maneira eficiente e confiável. Ao fazer isso, aspiramos ser parceiros de confiança, facilitando o caminho para o sucesso digital de nossos clientes.
              </p>
            </section>
            
            {/* Vision Section */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-semibold">Visão</h2>
              </div>
              <p className="text-gray-700 text-justify">
                Nossa visão na Dataproxy é ser reconhecidos como líderes em soluções de Tecnologia da Informação (TI) inovadoras e sustentáveis em Moçambique, que não apenas atendam, mas superem as expectativas de nossos clientes e parceiros. Almejamos ser a primeira escolha quando se trata de fornecer tecnologia de ponta que impulsiona o sucesso dos negócios em um mundo em constante evolução. Buscamos construir relacionamentos sólidos e duradouros com nossos clientes, baseados na confiança, transparência e compromisso com a excelência. Ao mesmo tempo, aspiramos a ser uma força positiva na comunidade, contribuindo para o crescimento e desenvolvimento sustentável das regiões onde operamos.
              </p>
            </section>
            
            {/* Values Section */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-semibold">Nossos Valores</h2>
              </div>
              <p className="text-gray-700 text-justify">
                Nossa empresa é orientada por valores fundamentais que refletem nosso compromisso em fornecer soluções de Tecnologia da Informação (TI) de ponta, adaptáveis e sustentáveis para atender às necessidades em constante evolução de nossos clientes e parceiros. A inovação está no cerne do nosso DNA, buscando constantemente novas abordagens para resolver desafios. Demonstramos agilidade, respondendo prontamente às demandas do mercado e às mudanças tecnológicas. Comprometemo-nos com a mais alta qualidade em todas as nossas iniciativas, garantindo que nossas soluções atendam aos mais rigorosos padrões de desempenho e confiabilidade. Além disso, mantemos um forte compromisso com a sustentabilidade, buscando minimizar nosso impacto ambiental e promover práticas de negócios responsáveis.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
