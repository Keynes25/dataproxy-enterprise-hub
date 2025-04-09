
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  image?: string;
}

const TestimonialCard = ({ quote, name, role, company, image }: TestimonialCardProps) => {
  return (
    <Card className="border-0 shadow-lg h-full card-hover">
      <CardContent className="p-8">
        <div className="flex flex-col h-full">
          <div className="mb-6">
            <svg
              className="h-8 w-8 text-primary-300"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
          </div>
          
          <p className="text-gray-700 mb-6 flex-grow">{quote}</p>
          
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-3">
              {image ? (
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src={image}
                  alt={name}
                />
              ) : (
                <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-700 font-medium">
                    {name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div>
              <p className="font-medium text-gray-900">{name}</p>
              <p className="text-gray-600 text-sm">
                {role}, {company}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
