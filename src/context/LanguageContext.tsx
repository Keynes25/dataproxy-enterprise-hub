
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
    'services.backToServices': 'Back to Services',
    'services.keyFeatures': 'Key Features',
    
    // Service Details
    'services.dataManagement.full': 'Our Data Management solutions help organizations effectively organize, protect, and process their valuable data assets. We implement robust database systems, data warehousing solutions, and data governance frameworks to ensure your information is accessible, secure, and compliant with industry regulations.',
    'services.dataManagement.feature1': 'Enterprise data warehousing and lake solutions',
    'services.dataManagement.feature2': 'Data governance and compliance frameworks',
    'services.dataManagement.feature3': 'Master data management and data quality services',
    
    'services.cloudSolutions.full': "Our Cloud Solutions provide flexible, scalable infrastructure that adapts to your business needs. Whether you're migrating existing systems to the cloud or building cloud-native applications, our expert team ensures smooth deployment, optimal performance, and cost-effective operations.",
    'services.cloudSolutions.feature1': 'Hybrid and multi-cloud architecture design',
    'services.cloudSolutions.feature2': 'Cloud migration and optimization services',
    'services.cloudSolutions.feature3': 'Managed cloud infrastructure and monitoring',
    
    'services.cybersecurity.full': 'Our Cybersecurity services protect your organization from evolving digital threats. We implement comprehensive security strategies, advanced threat detection systems, and robust defensive measures to safeguard your data, applications, and infrastructure from unauthorized access and cyber attacks.',
    'services.cybersecurity.feature1': 'Security assessment and penetration testing',
    'services.cybersecurity.feature2': 'Advanced threat detection and prevention',
    'services.cybersecurity.feature3': 'Security operations center (SOC) services',
    
    'services.enterpriseSoftware.full': 'Our Enterprise Software solutions deliver custom applications designed to streamline operations, enhance productivity, and drive innovation across your organization. Our development teams create robust, scalable software that integrates seamlessly with your existing systems and evolves with your business needs.',
    'services.enterpriseSoftware.feature1': 'Custom application development and integration',
    'services.enterpriseSoftware.feature2': 'Legacy system modernization',
    'services.enterpriseSoftware.feature3': 'Enterprise application lifecycle management',
    
    'services.businessIntelligence.full': 'Our Business Intelligence solutions transform raw data into strategic insights that inform decision-making. We implement comprehensive analytics platforms, dashboards, and reporting tools that help you visualize trends, identify opportunities, and make data-driven decisions across all levels of your organization.',
    'services.businessIntelligence.feature1': 'Advanced analytics and predictive modeling',
    'services.businessIntelligence.feature2': 'Interactive dashboards and visualization',
    'services.businessIntelligence.feature3': 'Real-time reporting and KPI monitoring',
    
    'services.itConsulting.full': 'Our IT Consulting services provide strategic guidance to optimize your technology investments and align them with your business objectives. Our experienced consultants work closely with your team to assess your current infrastructure, identify opportunities for improvement, and develop roadmaps for digital transformation.',
    'services.itConsulting.feature1': 'IT strategy and roadmap development',
    'services.itConsulting.feature2': 'Technology assessment and selection',
    'services.itConsulting.feature3': 'Digital transformation guidance',
    
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
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.description': 'Discover how Dataproxy Enterprise has helped organizations across industries overcome their data challenges and achieve their business goals.',
    'testimonials.trustedBy': 'Trusted by Leading Organizations',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.description': "Ready to transform your enterprise's data capabilities? Contact us today to discuss how our solutions can address your business challenges.",
    'contact.form.title': 'Send Us a Message',
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
    'contact.info.email': 'Email Contact',
    'contact.info.hours': 'Hours of Operation',
    'contact.info.weekdays': 'Monday - Friday: 9am - 6pm',
    'contact.info.saturday': 'Saturday: 10am - 4pm',
    'contact.info.sunday': 'Sunday: Closed',
    'contact.getInTouch': 'Get in Touch',
    
    // Footer
    'footer.about': 'Empowering businesses with innovative data solutions and enterprise-grade IT services.',
    'footer.quickLinks': 'Quick Links',
    'footer.ourServices': 'Our Services',
    'footer.contactUs': 'Contact Us',
    'footer.rights': 'All rights reserved.'
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
    'services.backToServices': 'Voltar para Serviços',
    'services.keyFeatures': 'Principais Recursos',
    
    // Service Details
    'services.dataManagement.full': 'Nossas soluções de Gestão de Dados ajudam as organizações a organizar, proteger e processar efetivamente seus valiosos ativos de dados. Implementamos sistemas de banco de dados robustos, soluções de armazenamento de dados e estruturas de governança de dados para garantir que suas informações sejam acessíveis, seguras e em conformidade com as regulamentações do setor.',
    'services.dataManagement.feature1': 'Soluções de armazenamento e lago de dados empresariais',
    'services.dataManagement.feature2': 'Estruturas de governança e conformidade de dados',
    'services.dataManagement.feature3': 'Gerenciamento de dados mestre e serviços de qualidade de dados',
    
    'services.cloudSolutions.full': 'Nossas Soluções em Nuvem fornecem infraestrutura flexível e escalável que se adapta às necessidades do seu negócio. Seja migrando sistemas existentes para a nuvem ou construindo aplicações nativas em nuvem, nossa equipe especializada garante implantação suave, desempenho ideal e operações econômicas.',
    'services.cloudSolutions.feature1': 'Design de arquitetura híbrida e multi-nuvem',
    'services.cloudSolutions.feature2': 'Serviços de migração e otimização para nuvem',
    'services.cloudSolutions.feature3': 'Infraestrutura em nuvem gerenciada e monitoramento',
    
    'services.cybersecurity.full': 'Nossos serviços de Cibersegurança protegem sua organização contra ameaças digitais em evolução. Implementamos estratégias de segurança abrangentes, sistemas avançados de detecção de ameaças e medidas defensivas robustas para proteger seus dados, aplicações e infraestrutura contra acesso não autorizado e ataques cibernéticos.',
    'services.cybersecurity.feature1': 'Avaliação de segurança e testes de penetração',
    'services.cybersecurity.feature2': 'Detecção e prevenção avançada de ameaças',
    'services.cybersecurity.feature3': 'Serviços de centro de operações de segurança (SOC)',
    
    'services.enterpriseSoftware.full': 'Nossas soluções de Software Empresarial oferecem aplicações personalizadas projetadas para agilizar operações, aumentar a produtividade e impulsionar a inovação em toda a sua organização. Nossas equipes de desenvolvimento criam software robusto e escalável que se integra perfeitamente com seus sistemas existentes e evolui com as necessidades do seu negócio.',
    'services.enterpriseSoftware.feature1': 'Desenvolvimento e integração de aplicações personalizadas',
    'services.enterpriseSoftware.feature2': 'Modernização de sistemas legados',
    'services.enterpriseSoftware.feature3': 'Gerenciamento do ciclo de vida de aplicações empresariais',
    
    'services.businessIntelligence.full': 'Nossas soluções de Inteligência de Negócios transformam dados brutos em insights estratégicos que informam a tomada de decisões. Implementamos plataformas abrangentes de análise, painéis e ferramentas de relatórios que ajudam você a visualizar tendências, identificar oportunidades e tomar decisões baseadas em dados em todos os níveis da sua organização.',
    'services.businessIntelligence.feature1': 'Análise avançada e modelagem preditiva',
    'services.businessIntelligence.feature2': 'Painéis interativos e visualização',
    'services.businessIntelligence.feature3': 'Relatórios em tempo real e monitoramento de KPIs',
    
    'services.itConsulting.full': 'Nossos serviços de Consultoria em TI fornecem orientação estratégica para otimizar seus investimentos em tecnologia e alinhá-los com seus objetivos de negócio. Nossos consultores experientes trabalham em estreita colaboração com sua equipe para avaliar sua infraestrutura atual, identificar oportunidades de melhoria e desenvolver roteiros para transformação digital.',
    'services.itConsulting.feature1': 'Desenvolvimento de estratégia e roteiro de TI',
    'services.itConsulting.feature2': 'Avaliação e seleção de tecnologia',
    'services.itConsulting.feature3': 'Orientação para transformação digital',
    
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
    
    // Testimonials
    'testimonials.title': 'O Que Nossos Clientes Dizem',
    'testimonials.description': 'Descubra como a Dataproxy Enterprise tem ajudado organizações de diversos setores a superar seus desafios de dados e alcançar seus objetivos de negócios.',
    'testimonials.trustedBy': 'Confiada por Organizações Líderes',
    
    // Contact
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
    'contact.info.weekdays': 'Segunda - Sexta: 7:00 - 17:00',
    'contact.info.saturday': 'Sábado: 8:00 - 12:00',
    'contact.info.sunday': 'Domingo: Fechado',
    'contact.getInTouch': 'Entre em Contato',
    
    // Footer
    'footer.about': 'Capacitando empresas com soluções inovadoras de dados e serviços de TI de nível empresarial.',
    'footer.quickLinks': 'Links Rápidos',
    'footer.ourServices': 'Nossos Serviços',
    'footer.contactUs': 'Contate-nos',
    'footer.rights': 'Todos os direitos reservados.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt'); // Changed default language to 'pt'

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
