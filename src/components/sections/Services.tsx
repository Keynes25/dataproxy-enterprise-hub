
import React from 'react';
import ServiceCard from '@/components/ui/ServiceCard';
import { Database, Cloud, Shield, Code, LineChart, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Database,
      titleKey: 'services.dataManagement',
      descriptionKey: 'services.dataManagement.desc',
    },
    {
      icon: Cloud,
      titleKey: 'services.cloudSolutions',
      descriptionKey: 'services.cloudSolutions.desc',
    },
    {
      icon: Shield,
      titleKey: 'services.cybersecurity',
      descriptionKey: 'services.cybersecurity.desc',
    },
    {
      icon: Code,
      titleKey: 'services.enterpriseSoftware',
      descriptionKey: 'services.enterpriseSoftware.desc',
    },
    {
      icon: LineChart,
      titleKey: 'services.businessIntelligence',
      descriptionKey: 'services.businessIntelligence.desc',
    },
    {
      icon: CheckCircle,
      titleKey: 'services.itConsulting',
      descriptionKey: 'services.itConsulting.desc',
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="mb-4">{t('services.title')}</h2>
          <p className="text-gray-600 text-lg">
            {t('services.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={t(service.titleKey)}
              description={t(service.descriptionKey)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
