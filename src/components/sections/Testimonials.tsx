
import React from 'react';
import TestimonialCard from '@/components/ui/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Dataproxy Enterprise transformed our data management infrastructure, resulting in a 40% increase in operational efficiency and significant cost savings.",
      name: "Sarah Johnson",
      role: "CTO",
      company: "Global Finance Corp",
    },
    {
      quote: "The cybersecurity solutions implemented by Dataproxy Enterprise have given us peace of mind knowing our sensitive data is protected by industry-leading security protocols.",
      name: "Michael Chen",
      role: "IT Director",
      company: "HealthTech Solutions",
    },
    {
      quote: "Working with Dataproxy Enterprise on our cloud migration was seamless. Their team's expertise and support throughout the process exceeded our expectations.",
      name: "David Rodriguez",
      role: "Operations Manager",
      company: "Retail Innovations Inc",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 text-lg">
            Discover how Dataproxy Enterprise has helped organizations across industries
            overcome their data challenges and achieve their business objectives.
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
          <h3 className="text-2xl font-bold mb-8">Trusted by Leading Organizations</h3>
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
