
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
    'services.dataManagement': 'Management System',
    'services.dataManagement.desc': 'Solution designed to streamline your business operations, enhance productivity, and improve decision-making by integrating and automating key processes across your organization',
    'services.cloudSolutions': 'Software Development',
    'services.cloudSolutions.desc': 'Custom software development solutions designed to meet your unique business needs, delivering high-quality, scalable, and efficient applications that drive growth and innovation',
    'services.cybersecurity': 'IT Consulting and Support',
    'services.cybersecurity.desc': 'Expert IT consulting and support services to optimize your technology infrastructure, ensuring seamless operations, strategic planning, and robust solutions for business success.',
    'services.enterpriseSoftware': 'Website Hosting',
    'services.enterpriseSoftware.desc': 'Reliable website hosting services offering fast, secure, and scalable solutions to ensure your website runs smoothly, with minimal downtime and maximum performance.',
    'services.businessIntelligence': 'Sale of Computer Equipment',
    'services.businessIntelligence.desc': 'High-quality computer equipment sales offering the latest technology and reliable hardware solutions to meet your business and personal computing needs.',
    'services.itConsulting': 'Website Creation',
    'services.itConsulting.desc': 'Professional website creation services to build visually appealing, user-friendly, and responsive websites tailored to your business needs, ensuring an exceptional online presence.',
    'services.learnMore': 'Learn More',
    'services.backToServices': 'Back to Services',
    'services.keyFeatures': 'Key Features',
    'about.backToHome': 'Back to Home',
    
    // Service Details
    'services.dataManagement.full': 'Our services encompass the provision of complete management systems, meticulously designed to meet the specific needs of companies in diverse sectors, including billing, human resources, accounting, inventory management and procurement. These solutions are designed based on a deep understanding of the challenges faced by our customers, aiming to offer efficiency, precision and control at all stages of the process. Sales System: Increase your sales and improve the customer experience with comprehensive tools to manage leads, opportunities, quotes and orders.',
    'services.dataManagement.feature1': 'Enterprise data warehousing and lake solutions',
    'services.dataManagement.feature2': 'Data governance and compliance frameworks',
    'services.dataManagement.feature3': 'Master data management and data quality services',
    
    'services.cloudSolutions.full': "Our custom software development services are designed to create tailored digital solutions that meet your specific business needs. From mobile apps to enterprise-level systems, we combine cutting-edge technology with innovative design to deliver software that enhances efficiency, improves user experience, and drives your business forward.",
    'services.cloudSolutions.feature1': 'Web and mobile application development',
    'services.cloudSolutions.feature2': 'Custom enterprise software solutions',
    'services.cloudSolutions.feature3': 'Software integration and API development',
    
    'services.cybersecurity.full': 'Our IT consulting and support services provide comprehensive technological assistance to optimize your business operations. Our team of experienced professionals offers strategic guidance, technical support, and innovative solutions to address your IT challenges, ensure system reliability, and drive digital transformation.',
    'services.cybersecurity.feature1': 'IT infrastructure assessment and planning',
    'services.cybersecurity.feature2': 'Technical support and problem resolution',
    'services.cybersecurity.feature3': 'Technology strategy and digital transformation',
    
    'services.enterpriseSoftware.full': 'Our website hosting services provide reliable, secure, and high-performance solutions for your online presence. We offer scalable hosting options with robust infrastructure, ensuring your website remains accessible, fast, and protected against threats, allowing you to focus on your core business while we handle the technical aspects.',
    'services.enterpriseSoftware.feature1': 'Secure and reliable web hosting infrastructure',
    'services.enterpriseSoftware.feature2': 'Scalable solutions for growing businesses',
    'services.enterpriseSoftware.feature3': 'Performance optimization and monitoring',
    
    'services.businessIntelligence.full': 'We offer a comprehensive range of high-quality computer equipment to meet your technology needs. From powerful workstations and servers to networking devices and peripherals, our carefully selected products combine reliability, performance, and value to support your business operations and enhance productivity.',
    'services.businessIntelligence.feature1': 'Desktop computers and workstations',
    'services.businessIntelligence.feature2': 'Laptops and mobile computing solutions',
    'services.businessIntelligence.feature3': 'Networking equipment and peripherals',
    
    'services.itConsulting.full': 'Our website creation services deliver professionally designed, fully functional websites that effectively represent your brand online. We combine attractive design with user-friendly interfaces and responsive functionality to create websites that engage visitors, convey your message clearly, and help achieve your business objectives.',
    'services.itConsulting.feature1': 'Custom website design and development',
    'services.itConsulting.feature2': 'Responsive layouts for all devices',
    'services.itConsulting.feature3': 'Content management systems integration',
    
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
    'contact.info.weekdays': 'Monday - Friday: 7am - 5pm',
    'contact.info.saturday': 'Saturday: 8am - 12pm',
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
    'services.dataManagement': 'Sistema de Gestão',
    'services.dataManagement.desc': 'Solução projetada para simplificar suas operações comerciais, aumentar a produtividade e melhorar a tomada de decisões integrando e automatizando processos-chave em toda a sua organização.',
    'services.cloudSolutions': 'Desenvolvimento de Software',
    'services.cloudSolutions.desc': 'Soluções personalizadas de desenvolvimento de software projetadas para atender às necessidades exclusivas do seu negócio, entregando aplicações de alta qualidade, escaláveis e eficientes que impulsionam o crescimento e a inovação.',
    'services.cybersecurity': 'Consultoria e Suporte de TI',
    'services.cybersecurity.desc': 'Serviços especializados de consultoria e suporte em TI para otimizar sua infraestrutura tecnológica, garantindo operações perfeitas, planejamento estratégico e soluções robustas para o sucesso do negócio.',
    'services.enterpriseSoftware': 'Hospedagem de Website',
    'services.enterpriseSoftware.desc': 'Serviços confiáveis de hospedagem de websites oferecendo soluções rápidas, seguras e escaláveis para garantir que seu site funcione sem problemas, com tempo mínimo de inatividade e desempenho máximo.',
    'services.businessIntelligence': 'Venda de Equipamento Informático',
    'services.businessIntelligence.desc': 'Venda de equipamentos informáticos de alta qualidade oferecendo tecnologia de ponta e soluções de hardware confiáveis para atender às suas necessidades empresariais e de computação pessoal.',
    'services.itConsulting': 'Criação de Website',
    'services.itConsulting.desc': 'Serviços profissionais de criação de websites para construir sites visualmente atraentes, amigáveis ao usuário e responsivos, adaptados às necessidades do seu negócio, garantindo uma presença online excepcional.',
    'services.learnMore': 'Saiba Mais',
    'services.backToServices': 'Voltar para Serviços',
    'services.keyFeatures': 'Principais Recursos',
    'about.backToHome': 'Voltar para Página Inicial',
    
    // Service Details
    'services.dataManagement.full': 'Nossos serviços abrangem o fornecimento de sistemas de gestão completos, meticulosamente projetados para atender às necessidades específicas de empresas em diversos setores, incluindo faturamento, recursos humanos, contabilidade, gestão de inventário e compras. Essas soluções são projetadas com base em uma compreensão profunda dos desafios enfrentados pelos nossos clientes, visando oferecer eficiência, precisão e controle em todas as etapas do processo. Sistema de Vendas: Aumente suas vendas e melhore a experiência do cliente com ferramentas abrangentes para gerenciar leads, oportunidades, cotações e pedidos.',
    'services.dataManagement.feature1': 'Soluções de armazenamento e lago de dados empresariais',
    'services.dataManagement.feature2': 'Estruturas de governança e conformidade de dados',
    'services.dataManagement.feature3': 'Gerenciamento de dados mestre e serviços de qualidade de dados',
    
    'services.cloudSolutions.full': 'Nossos serviços de desenvolvimento de software personalizado são projetados para criar soluções digitais sob medida que atendam às necessidades específicas do seu negócio. De aplicativos móveis a sistemas de nível empresarial, combinamos tecnologia de ponta com design inovador para entregar software que melhora a eficiência, aprimora a experiência do usuário e impulsiona seu negócio.',
    'services.cloudSolutions.feature1': 'Desenvolvimento de aplicações web e mobile',
    'services.cloudSolutions.feature2': 'Soluções de software empresarial personalizadas',
    'services.cloudSolutions.feature3': 'Integração de software e desenvolvimento de API',
    
    'services.cybersecurity.full': 'Nossos serviços de consultoria e suporte em TI fornecem assistência tecnológica abrangente para otimizar suas operações comerciais. Nossa equipe de profissionais experientes oferece orientação estratégica, suporte técnico e soluções inovadoras para enfrentar seus desafios de TI, garantir a confiabilidade do sistema e impulsionar a transformação digital.',
    'services.cybersecurity.feature1': 'Avaliação e planejamento da infraestrutura de TI',
    'services.cybersecurity.feature2': 'Suporte técnico e resolução de problemas',
    'services.cybersecurity.feature3': 'Estratégia de tecnologia e transformação digital',
    
    'services.enterpriseSoftware.full': 'Nossos serviços de hospedagem de websites fornecem soluções confiáveis, seguras e de alto desempenho para sua presença online. Oferecemos opções de hospedagem escaláveis com infraestrutura robusta, garantindo que seu website permaneça acessível, rápido e protegido contra ameaças, permitindo que você se concentre no seu negócio principal enquanto cuidamos dos aspectos técnicos.',
    'services.enterpriseSoftware.feature1': 'Infraestrutura de hospedagem web segura e confiável',
    'services.enterpriseSoftware.feature2': 'Soluções escaláveis para empresas em crescimento',
    'services.enterpriseSoftware.feature3': 'Otimização e monitoramento de desempenho',
    
    'services.businessIntelligence.full': 'Oferecemos uma gama abrangente de equipamentos informáticos de alta qualidade para atender às suas necessidades tecnológicas. De potentes estações de trabalho e servidores a dispositivos de rede e periféricos, nossos produtos cuidadosamente selecionados combinam confiabilidade, desempenho e valor para apoiar suas operações comerciais e aumentar a produtividade.',
    'services.businessIntelligence.feature1': 'Computadores desktop e estações de trabalho',
    'services.businessIntelligence.feature2': 'Laptops e soluções de computação móvel',
    'services.businessIntelligence.feature3': 'Equipamentos de rede e periféricos',
    
    'services.itConsulting.full': 'Nossos serviços de criação de websites entregam sites profissionalmente projetados e totalmente funcionais que representam efetivamente sua marca online. Combinamos design atraente com interfaces amigáveis ao usuário e funcionalidade responsiva para criar websites que engajam visitantes, transmitem sua mensagem claramente e ajudam a alcançar seus objetivos de negócio.',
    'services.itConsulting.feature1': 'Design e desenvolvimento personalizado de websites',
    'services.itConsulting.feature2': 'Layouts responsivos para todos os dispositivos',
    'services.itConsulting.feature3': 'Integração com sistemas de gerenciamento de conteúdo',
    
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
  const [language, setLanguage] = useState<Language>('pt'); // Default language is Portuguese

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
