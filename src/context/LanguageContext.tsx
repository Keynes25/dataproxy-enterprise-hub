
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, Record<string, string>>;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.clients': 'Clients',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    
    // Hero section
    'hero.subtitle': 'Simplifying Technology,',
    'hero.title': ' Empowering Solutions',
    'hero.description': 'Dataproxy Enterprise delivers cutting-edge data management solutions and IT services that transform how businesses leverage their information assets.',
    'hero.solutions': 'Our Solutions',
    'hero.contact': 'Contact Us',
    'hero.trusted': 'Trusted by industry leaders:',
    
    // Services section
    'services.title': 'Our Enterprise Solutions',
    'services.description': 'Dataproxy Enterprise offers a comprehensive suite of services designed to optimize your data infrastructure and drive business growth.',
    'services.dataManagement': 'Data Management',
    'services.dataManagement.desc': 'Comprehensive solutions for organizing, storing, and processing your enterprise data assets efficiently.',
    'services.cloudSolutions': 'Cloud Solutions',
    'services.cloudSolutions.desc': 'Secure and scalable cloud infrastructure services tailored to your business requirements.',
    'services.cybersecurity': 'Cybersecurity',
    'services.cybersecurity.desc': 'Advanced security protocols and systems to protect your valuable data and digital assets.',
    'services.enterpriseSoftware': 'Enterprise Software',
    'services.enterpriseSoftware.desc': 'Custom software development and integration services designed for enterprise-scale operations.',
    'services.businessIntelligence': 'Business Intelligence',
    'services.businessIntelligence.desc': 'Data analytics and visualization tools that transform raw data into actionable business insights.',
    'services.itConsulting': 'IT Consulting',
    'services.itConsulting.desc': 'Strategic guidance from industry experts to optimize your technology investments and operations.',
    'services.learnMore': 'Learn More',
    
    // About section
    'about.title': 'About Dataproxy Enterprise',
    'about.p1': 'Dataproxy is a company established in Mozambique, dedicated to driving the development and growth of its clients through innovative solutions in the field of Information Technology (IT) as well as the sale of computer equipment.',
    'about.p2': 'Our mission is to provide services and products that not only meet, but also exceed market expectations, thus contributing to advancement and excellence in all our operations.',
    'about.learnMore': 'Learn More About Us',
    
    // Features
    'features.security': 'Industry-leading data security protocols',
    'features.team': 'Experienced team of IT professionals',
    'features.solutions': 'Customized enterprise solutions',
    'features.support': 'Dedicated 24/7 technical support',
    'features.innovation': 'Continuous innovation and improvement',
    'features.global': 'Global service delivery capabilities',

    // Testimonials section
    'testimonials.title': 'What Our Clients Say',
    'testimonials.description': 'Discover how Dataproxy Enterprise has helped organizations across industries overcome their data challenges and achieve their business objectives.',
    'testimonials.trustedBy': 'Trusted by Leading Organizations',

    // Contact section
    'contact.title': 'Get in Touch',
    'contact.description': 'Ready to transform your enterprise data capabilities? Contact us today to discuss how our solutions can address your business challenges.',
    'contact.form.title': 'Send us a Message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.subject.placeholder': 'How can we help you?',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Your message...',
    'contact.form.send': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.visit': 'Visit Us',
    'contact.info.call': 'Call Us',
    'contact.info.email': 'Email Us',
    'contact.info.hours': 'Business Hours',
    'contact.info.weekdays': 'Monday - Friday: 9:00 AM - 6:00 PM',
    'contact.info.saturday': 'Saturday: 10:00 AM - 4:00 PM',
    'contact.info.sunday': 'Sunday: Closed',

    // Footer
    'footer.about': 'Empowering businesses with innovative data solutions and enterprise-grade IT services.',
    'footer.quickLinks': 'Quick Links',
    'footer.ourServices': 'Our Services',
    'footer.contactUs': 'Contact Us',
    'footer.rights': 'All rights reserved.',
  },
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.services': 'Serviços',
    'nav.about': 'Sobre',
    'nav.clients': 'Clientes',
    'nav.contact': 'Contato',
    'nav.getStarted': 'Começar',
    
    // Hero section
    'hero.subtitle': 'Simplificando a Tecnologia,',
    'hero.title': 'Potencializando Soluções',
    'hero.description': 'A Dataproxy Enterprise oferece soluções de gestão de dados de ponta e serviços de TI que transformam a forma como as empresas aproveitam seus ativos de informação.',
    'hero.solutions': 'Nossas Soluções',
    'hero.contact': 'Contacte-nos',
    'hero.trusted': 'Confiado por líderes da indústria:',
    
    // Services section
    'services.title': 'Nossas Soluções Empresariais',
    'services.description': 'A Dataproxy Enterprise oferece um conjunto abrangente de serviços projetados para otimizar sua infraestrutura de dados e impulsionar o crescimento dos negócios.',
    'services.dataManagement': 'Gestão de Dados',
    'services.dataManagement.desc': 'Soluções abrangentes para organizar, armazenar e processar os ativos de dados da sua empresa com eficiência.',
    'services.cloudSolutions': 'Soluções em Nuvem',
    'services.cloudSolutions.desc': 'Serviços de infraestrutura em nuvem seguros e escaláveis, adaptados às necessidades do seu negócio.',
    'services.cybersecurity': 'Cibersegurança',
    'services.cybersecurity.desc': 'Protocolos e sistemas de segurança avançados para proteger seus dados valiosos e ativos digitais.',
    'services.enterpriseSoftware': 'Software Empresarial',
    'services.enterpriseSoftware.desc': 'Serviços de desenvolvimento e integração de software personalizados, projetados para operações em escala empresarial.',
    'services.businessIntelligence': 'Inteligência de Negócios',
    'services.businessIntelligence.desc': 'Ferramentas de análise e visualização de dados que transformam dados brutos em insights acionáveis para o negócio.',
    'services.itConsulting': 'Consultoria em TI',
    'services.itConsulting.desc': 'Orientação estratégica de especialistas do setor para otimizar seus investimentos e operações de tecnologia.',
    'services.learnMore': 'Saiba Mais',
    
    // About section
    'about.title': 'Sobre a Dataproxy Enterprise',
    'about.p1': 'A Dataproxy é uma empresa estabelecida em Moçambique, dedicada a impulsionar o desenvolvimento e crescimento de seus clientes por meio de soluções inovadoras no campo da Tecnologia da Informação (TI) assim como venda de equipamentos informáticos.',
    'about.p2': 'Nossa missão é proporcionar serviços e produtos que não apenas atendam, mas também superem as expectativas do mercado, contribuindo assim para o avanço e a excelência em todas as nossas operações.',
    'about.learnMore': 'Saiba Mais Sobre Nós',
    
    // Features
    'features.security': 'Protocolos de segurança de dados líderes de mercado',
    'features.team': 'Equipe experiente de profissionais de TI',
    'features.solutions': 'Soluções empresariais personalizadas',
    'features.support': 'Suporte técnico dedicado 24/7',
    'features.innovation': 'Inovação e melhoria contínuas',
    'features.global': 'Capacidades de entrega de serviços globais',

    // Testimonials section
    'testimonials.title': 'O Que Nossos Clientes Dizem',
    'testimonials.description': 'Descubra como a Dataproxy Enterprise tem ajudado organizações de diversos setores a superar seus desafios de dados e alcançar seus objetivos de negócios.',
    'testimonials.trustedBy': 'Confiada por Organizações Líderes',

    // Contact section
    'contact.title': 'Entre em Contato',
    'contact.description': 'Pronto para transformar as capacidades de dados da sua empresa? Entre em contato hoje para discutir como nossas soluções podem resolver seus desafios de negócios.',
    'contact.form.title': 'Envie-nos uma Mensagem',
    'contact.form.name': 'Nome',
    'contact.form.email': 'E-mail',
    'contact.form.subject': 'Assunto',
    'contact.form.subject.placeholder': 'Como podemos ajudá-lo?',
    'contact.form.message': 'Mensagem',
    'contact.form.message.placeholder': 'Sua mensagem...',
    'contact.form.send': 'Enviar Mensagem',
    'contact.info.title': 'Informações de Contato',
    'contact.info.visit': 'Visite-nos',
    'contact.info.call': 'Ligue para Nós',
    'contact.info.email': 'E-mail para Contato',
    'contact.info.hours': 'Horário de Funcionamento',
    'contact.info.weekdays': 'Segunda - Sexta: 9:00 - 18:00',
    'contact.info.saturday': 'Sábado: 10:00 - 16:00',
    'contact.info.sunday': 'Domingo: Fechado',

    // Footer
    'footer.about': 'Capacitando empresas com soluções inovadoras de dados e serviços de TI de nível empresarial.',
    'footer.quickLinks': 'Links Rápidos',
    'footer.ourServices': 'Nossos Serviços',
    'footer.contactUs': 'Contate-nos',
    'footer.rights': 'Todos os direitos reservados.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
