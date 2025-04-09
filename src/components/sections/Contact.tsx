
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
    // Show success message or error handling
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="mb-4">Get in Touch</h2>
          <p className="text-gray-600 text-lg">
            Ready to transform your enterprise data capabilities? Contact us today to discuss how our solutions can address your business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="How can we help you?" required />
              </div>
              <div className="space-y-2 mb-6">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="Your message..." rows={5} required />
              </div>
              <Button type="submit" className="w-full bg-primary-600 hover:bg-primary-700">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Visit Us</h4>
                  <address className="not-italic text-gray-600">
                    1234 Tech Boulevard<br />
                    Silicon Valley, CA 94043<br />
                    United States
                  </address>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Call Us</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email Us</h4>
                  <p className="text-gray-600">info@dataproxy-enterprise.com</p>
                  <p className="text-gray-600">support@dataproxy-enterprise.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-medium mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
