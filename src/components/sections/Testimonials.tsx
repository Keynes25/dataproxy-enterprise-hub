
import React from 'react';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { useLanguage } from '@/context/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      quote: "Dataproxy Enterprise transformed our data management infrastructure, resulting in a 100% increase in operational efficiency and significant cost savings.",
      name: "Keynes",
      role: "CTO",
      company: "Global Finance Corp",
    },
    {
      quote: "The cybersecurity solutions implemented by Dataproxy Enterprise have given us peace of mind knowing our sensitive data is protected by industry-leading security protocols.",
      name: "Fausto",
      role: "IT Director",
      company: "HealthTech Solutions",
    },
    {
      quote: "Working with Dataproxy Enterprise on our cloud migration was seamless. Their team's expertise and support throughout the process exceeded our expectations.",
      name: "Lucas Paketa",
      role: "Operations Manager",
      company: "Retail Innovations Inc",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="mb-4">{t('testimonials.title')}</h2>
          <p className="text-gray-600 text-lg">
            {t('testimonials.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">{t('testimonials.trustedBy')}</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {/* Replace with actual client logos */}
            <div className="h-12 w-32 bg-gray-200 rounded"></div>
            <div className="h-12 w-32 bg-gray-200 rounded"></div>
            <div className="h-12 w-32 bg-gray-200 rounded"></div>
            <div className="h-12 w-32 bg-gray-200 rounded"></div>
            <div className="h-12 w-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
