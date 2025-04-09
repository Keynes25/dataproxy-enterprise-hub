
import React from 'react';
import ServiceCard from '@/components/ui/ServiceCard';
import { Database, Cloud, Shield, Code, LineChart, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Database,
      title: 'Data Management',
      description: 'Comprehensive solutions for organizing, storing, and processing your enterprise data assets efficiently.',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Secure and scalable cloud infrastructure services tailored to your business requirements.',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security protocols and systems to protect your valuable data and digital assets.',
    },
    {
      icon: Code,
      title: 'Enterprise Software',
      description: 'Custom software development and integration services designed for enterprise-scale operations.',
    },
    {
      icon: LineChart,
      title: 'Business Intelligence',
      description: 'Data analytics and visualization tools that transform raw data into actionable business insights.',
    },
    {
      icon: CheckCircle,
      title: 'IT Consulting',
      description: 'Strategic guidance from industry experts to optimize your technology investments and operations.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="mb-4">Our Enterprise Solutions</h2>
          <p className="text-gray-600 text-lg">
            Dataproxy Enterprise offers a comprehensive suite of services designed to optimize your data infrastructure and drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
